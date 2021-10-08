import { createApp } from 'vue';

import './css/reset.css';

import App from './App.vue';
import store from './store';
import { setListeners } from './utils/listeners';

const app = createApp(App);

app.use(store);

app.mount('#app');

setListeners();
