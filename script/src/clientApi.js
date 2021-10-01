import * as messages from '../../sharedTypes/messages';


export function openWidget($iframe) {
  Object.assign($iframe, { style: `z-index: ${Number.MAX_SAFE_INTEGER}; width:100%; height: 100vh; position: absolute; top: 0px; left: 0px; inset: 0px; border-width: 0px; display: block; overflow: hidden auto;` });
  $iframe.contentWindow.postMessage({ type: messages.WIDGET_OPENED }, '*');
}

export function closeWidget($iframe) {
  Object.assign($iframe, { style: `z-index: ${Number.MAX_SAFE_INTEGER}; width:100%; height: 100vh; position: absolute; top: 0px; left: 0px; inset: 0px; border-width: 0px; display: none; overflow: hidden auto;` });
  $iframe.contentWindow.postMessage({ type: messages.WIDGET_CLOSED }, '*');
}

export function removeWidgetFromDOM($iframe) {
  $iframe.remove();
  $iframe = null;
}
