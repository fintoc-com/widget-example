import * as widgetAPI from './widgetApi';
import * as messageTypes from '../../../sharedTypes/messages';
import $store from '../store';

function eventListener(event) {
  const { data } = event;
  switch (data.type) {
    case (messageTypes.WIDGET_CONFIGURATION_REQUEST): {
      $store.dispatch('widgetData/configure', data.configuration);
      widgetAPI.widgetConfigured();
      console.log('WIDGET: Just got configured...');
      break;
    }
    default: {
      break;
    }
  }
}

export function setListeners() {
  window.addEventListener('message', eventListener, false);
  widgetAPI.widgetListening();
  console.log('WIDGET: Now listening...');
}
