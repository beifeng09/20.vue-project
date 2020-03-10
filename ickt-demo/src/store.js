import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		// 搜索词
		search: ''
	},
	mutations: {
		// 更新search
		updateSearch(state, search) {
			// 更新search搜索词
			state.search = search;
		}
	},
	actions: {

	}
})
