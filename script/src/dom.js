import $document from '$document';

import { IFRAME_ID, WIDGET_URL } from './constants';

function iframeExists() {
  return !!$document.getElementById(IFRAME_ID);
}

function mountIframe() {
  const iframe = $document.createElement('iframe');
  iframe.src = WIDGET_URL;
  iframe.id = IFRAME_ID;
  iframe.title = 'Widget Example';
  iframe.style = `z-index: ${Number.MAX_SAFE_INTEGER}; width:100%; height: 100%; position: fixed; inset: 0px; border-width: 0px; display: none; overflow: hidden auto;`;
  $document.body.appendChild(iframe);
  return iframe;
}

export function mountIframeToDOM() {
  if (!iframeExists()) {
    return mountIframe();
  }
  return $document.getElementById(IFRAME_ID);
}
