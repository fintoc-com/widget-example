import * as clientAPI from './clientApi';
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

    listeners.setListeners(
      this.#triggerEvent.bind(this),
      this.#triggerExit.bind(this),
    );

    this._configure();
  }

  #triggerEvent(data) {
    this.#callbacks.onEvent(data);
  }

  #triggerExit(data) {
    this.#callbacks.onExit(data);
    this.close();
  }

  _configure() {
    clientAPI.configureWidget(this.#iframe, this.#config);
  }

  _setConfigured() {
    this.#configured = true;
    if (this.#opened) {
      clientAPI.openWidget(this.#iframe);
    }
  }

  open() {
    this.#opened = true;
    if (this.#configured) {
      clientAPI.openWidget(this.#iframe);
    }
  }

  close() {
    this.#opened = false;
    clientAPI.closeWidget(this.#iframe);
  }

  destroy() {
    this.#configured = false;
    this.close();
    clientAPI.removeWidgetFromDOM(this.#iframe);
    listeners.removeListeners();
  }
}
