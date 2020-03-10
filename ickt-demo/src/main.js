import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入axios
import axios from 'axios';

// 安装
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
	router,
	// 注册好了
	store,
	render: h => h(App)
}).$mount('#app')
