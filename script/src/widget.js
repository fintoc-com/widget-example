import * as clientAPI from './clientApi';
import * as listeners from './listeners';
import * as DOM from './dom';


export default class Widget {
  #iframe;
  #opened;
  #config;
  #callbacks;

  constructor({
    title,
    onEvent,
    onExit,
  }) {
    this.#iframe = DOM.mountIframeToDOM();
    this.#opened = false;
    this.#config = {
      title,
    };
    this.#callbacks = { onEvent, onExit };

    listeners.setListeners(
      this.#triggerEvent.bind(this),
      this.#triggerExit.bind(this),
    );
  }

  #triggerEvent(data) {
    this.#callbacks.onEvent(data);
  }

  #triggerExit(data) {
    this.#callbacks.onExit(data);
    this.close();
  }

  open() {
    clientAPI.openWidget(this.#iframe);
    this.#opened = true;
  }

  close() {
    clientAPI.closeWidget(this.#iframe);
    this.#opened = false;
  }

  destroy() {
    this.close();
    clientAPI.removeWidgetFromDOM(this.#iframe);
    listeners.removeListeners();
  }
}
