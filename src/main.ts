import BootStrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
Vue.config.productionTip = false;
Vue.use(BootStrapVue);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
