import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex) 
export default new Vuex.Store({
	state:{
		pelem:[]
	},
	getters:{
	},
	actions:{
		savePelem(context, pelem){
			context.commit('setPelem',pelem)
		} 
	},
	mutations:{
		setPelem(state, pelem){
			console.log(pelem)
			state.pelem = pelem
		} 
	}
})