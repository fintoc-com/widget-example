import { IFRAME_ID, DEVELOPMENT_WIDGET_URL, PRODUCTION_WIDGET_URL } from './constants';

const WIDGET_URL = DEVELOPMENT_WIDGET_URL;

function iframeExists() {
  return !!document.getElementById(IFRAME_ID);
}

function mountIframe() {
  const iframe = document.createElement('iframe');
  iframe.src = WIDGET_URL;
  iframe.id = IFRAME_ID;
  iframe.title = 'Widget Example';
  iframe.style = `z-index: ${Number.MAX_SAFE_INTEGER}; width:100%; height: 100%; position: fixed; inset: 0px; border-width: 0px; display: none; overflow: hidden auto;`;
  document.body.appendChild(iframe);
  return iframe;
}

export function mountIframeToDOM() {
  if (!iframeExists()) {
    return mountIframe();
  }
  return document.getElementById(IFRAME_ID);
}
