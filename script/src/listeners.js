import * as messageTypes from '../../sharedTypes/messages';


let eventListener;

function buildEventListener(hooks) {
  const { configure, setConfigured, onEvent, onExit } = hooks;
  return function listener(event) {
    const { data } = event;
    switch (data.type) {
      case (messageTypes.WIDGET_LISTENING): {
        configure();
        break;
      }
      case (messageTypes.WIDGET_CONFIGURED): {
        setConfigured();
        break;
      }
      case (messageTypes.WIDGET_EVENT): {
        onEvent(data);
        break;
      }
      case (messageTypes.WIDGET_CLOSED): {
        onExit(data);
        break;
      }
      default: {
        break;
      }
    }
  };
}

export function setListeners(hooks) {
  eventListener = buildEventListener(hooks);
  window.addEventListener('message', eventListener, false);
}

export function removeListeners() {
  window.removeEventListener('message', eventListener, false);
}
