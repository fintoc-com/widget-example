import * as scriptAPI from './scriptApi';
import * as listeners from './listeners';
import * as DOM from './dom';


export default class Widget {
  #iframe;
  #opened;
  #configured;
  #config;
  #callbacks;

  constructor({
    title,
    onEvent,
    onExit,
  }) {
    this.#iframe = DOM.mountIframeToDOM();
    this.#opened = false;
    this.#configured = false;
    this.#config = {
      title,
    };
    this.#callbacks = { onEvent, onExit };

    listeners.setListeners({
      configure: this.#configure.bind(this),
      setConfigured: this.#setConfigured.bind(this),
      onEvent: this.#triggerEvent.bind(this),
      onExit: this.#triggerExit.bind(this),
    });
  }

  #configure() {
    scriptAPI.configureWidget(this.#iframe, this.#config);
  }

  #setConfigured() {
    this.#configured = true;
    if (this.#opened) {
      scriptAPI.openWidget(this.#iframe);
    }
  }

  #triggerEvent(data) {
    this.#callbacks.onEvent(data);
  }

  #triggerExit(data) {
    this.#callbacks.onExit(data);
    this.close();
  }

  open() {
    this.#opened = true;
    if (this.#configured) {
      scriptAPI.openWidget(this.#iframe);
    }
  }

  close() {
    this.#opened = false;
    scriptAPI.closeWidget(this.#iframe);
  }

  destroy() {
    this.#configured = false;
    this.close();
    scriptAPI.removeWidgetFromDOM(this.#iframe);
    listeners.removeListeners();
  }
}
