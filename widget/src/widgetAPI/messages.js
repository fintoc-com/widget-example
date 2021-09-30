import * as messageTypes from '../../../sharedTypes/messages';

function getTimestamp() {
  try {
    const timestamp = Date.now();
    if (timestamp === undefined) {
      return Date.getTime();
    }
    return timestamp;
  } catch (err) {
    return Date.getTime();
  }
}

export function widgetOpened() {
  window.parent.postMessage({
    type: messageTypes.WIDGET_OPENED,
    metadata: {
      time: getTimestamp(),
    },
  }, '*');
}

export function widgetClosed() {
  window.parent.postMessage({
    type: messageTypes.WIDGET_CLOSED,
    metadata: {
      time: getTimestamp(),
    },
  }, '*');
}

export function widgetEvent(number) {
  window.parent.postMessage({
    type: messageTypes.WIDGET_EVENT,
    number,
    metadata: {
      time: getTimestamp(),
    },
  }, '*');
}
