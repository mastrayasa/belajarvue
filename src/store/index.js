import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)
import data from '../api/data'
export default new Vuex.Store({
	state :{
		students:[]
	},
	getters :{

	},
	actions: {
		getStudents(context){
			context.commit('setStudents')
		},
		addPower(context,data){
			context.commit('addPowerHero',data)
		},
		minPower(context,data){
			context.commit('minPowerHero',data)
		}
	},
	mutations:{
		setStudents(state){
			state.students = data.getStudents()
		},
		addPowerHero(state,index){
			//console.log(index)
			state.students[index].power = state.students[index].power + 1
		},
		minPowerHero(state,index){
			//console.log(index)
			state.students[index].power = state.students[index].power - 1
		}
	}
})

