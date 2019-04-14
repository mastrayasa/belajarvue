<template>
  <div class="mt-5">
  	 <ul>
  	 	<li v-for="(item, index) in students" :key="item.id" class="mb-4">
  	 		{{ item.name }} : 
  	 		{{ item.power }} 
  	 		<button @click="addPower(index)" class="btn btn-primary btn-sm">+ Power</button>
  	 		<button @click="minPower(index)" class="btn btn-primary btn-sm">- Power</button>
  	 	</li>
  	 </ul>

  	 <hr>

  	 <Hero2 />
  </div>
</template>

<script> 

import store from '../store/index';
import Hero2 from '@/components/Hero2' 

export default { 
	components: {
	    Hero2
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
