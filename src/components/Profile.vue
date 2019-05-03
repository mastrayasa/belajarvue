<template>
  <div>
  	 <button @click="logout">Logout</button>
    
  </div>
</template>

<script>

    import firebase from "firebase";

export default {
	name: 'profile',
   
  	methods: {
  		logout: function(){
  			firebase.auth().signOut().then(() => {
          this.$auth.destroy();
  				this.$router.replace('login')
  			});
  		}
  	}
     
}
</script>
