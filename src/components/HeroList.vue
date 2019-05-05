<template>
  <div>
  	 <ul>
  	 	<li v-for="item in students" :key="item.id" class="mb-4">
  	 		{{ item.name }} :  <strong>{{ item.power }} </strong>
  	 	</li>
  	 </ul>
  </div>
</template>

<script> 
import store from '../store/index';
export default { 
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