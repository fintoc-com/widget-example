import * as messageTypes from '../../sharedTypes/messages';


let eventListener;

function buildEventListener(onEvent, onExit) {
  return function listener(event) {
    const { data } = event;
    switch (data.type) {
      case (messageTypes.WIDGET_CLOSED): {
        onExit(data, widget);
        break;
      }
      case (messageTypes.WIDGET_EVENT): {
        onEvent(data, widget);
        break;
      }
      default: {
        break;
      }
    }
  };
}

export function setListeners(onEvent, onExit) {
  eventListener = buildEventListener(onEvent, onExit);
  window.addEventListener('message', eventListener, false);
}

export function removeListeners() {
  window.removeEventListener('message', eventListener, false);
}
