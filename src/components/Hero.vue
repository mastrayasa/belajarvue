<template>
  <div class="mt-5">
	
	<h2>Hero Power</h2>
  	<b-row>
		<b-col>
			<ul>
  	 	<li v-for="(item, index) in students" :key="item.id" class="mb-4">
  	 		{{ item.name }} : 
  	 		{{ item.power }} 
  	 		<button @click="minPower(index)" class="btn btn-primary btn-sm">-</button>
  	 		<button @click="addPower(index)" class="btn btn-primary btn-sm">+</button>
  	 		
  	 	</li>
  	 </ul>
		</b-col>

		<b-col> <HeroList />
		</b-col>
  	</b-row> 
  </div>
</template>

<script> 

import store from '../store/index';
import HeroList from '@/components/HeroList' 

export default { 
	components: {
	    HeroList
	},
	methods: {
		addPower: function(index){
			store.dispatch("addPower",index)
		},
		minPower: function(index){
			store.dispatch("minPower",index)
		}
	},
	computed:{
		students(){
			return store.state.students
		}
	},
	created(){
		store.dispatch('getStudents')
	}
}
</script>
