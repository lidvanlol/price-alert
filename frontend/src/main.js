import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource'
import VueMeta from 'vue-meta'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueResource);
Vue.use(VueMeta);

const serverUrl = location.href.includes('localhost') ? 'http://localhost:4000' : '/';

Vue.http.options.root = serverUrl;
Vue.url.options.root = serverUrl;

Vue.http.interceptors.push((request, next) => {
  request.credentials = true;
  next();
});

export const bus = new Vue();

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
