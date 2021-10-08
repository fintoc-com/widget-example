import { createStore } from 'vuex';

import widgetData from './modules/widgetData';

export default createStore({
  modules: {
    widgetData,
  },
});
