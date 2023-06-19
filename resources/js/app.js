import './bootstrap';

import { createApp } from "vue/dist/vue.esm-bundler.js";
import HelloComponent from './components/HelloComponent.vue';

const app = createApp({});
app.component('hello-component', HelloComponent);
app.mount('#app');
