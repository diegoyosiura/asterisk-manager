import { createApp } from 'vue';
import { createVuetify } from 'vuetify';

import App from './App.vue';
import axios from 'axios';
import router from './router';

import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(router).use(vuetify).mount('#app');

axios.defaults.baseURL = 'http://127.0.0.1:8000'; // Laravel backend URL
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

