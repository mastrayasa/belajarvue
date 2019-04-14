import Vuex from 'vuex'
import Vue from 'vue'
import data from '../api/data'
Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		students: []
	},
	getters: {

	},
	actions: {
		getStudents (context) {
			context.commit('setStudents')
		},
		addPower (context, data) {
			context.commit('addPowerHero', data)
		},
		minPower (context, data) {
			context.commit('minPowerHero', data)
		}
	},
	mutations: {
		setStudents (state) {
			state.students = data.getStudents()
		},
		addPowerHero (state, index) {
			state.students[index].power = state.students[index].power + 1
		},
		minPowerHero (state, index) {
			state.students[index].power = state.students[index].power - 1
		}
	}
})
