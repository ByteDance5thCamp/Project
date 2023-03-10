/* eslint-disable no-new */
import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
});
