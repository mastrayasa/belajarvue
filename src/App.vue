<template>
  <div id="app"> 
  
        <b-navbar toggleable="md" type="dark" variant="info" sticky>
           
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#/">Website Keren</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#/">Beranda</b-nav-item>
      <b-nav-item href="#/about">Tentang</b-nav-item>
      <b-nav-item href="#/kontak">Kontak</b-nav-item>  
      <b-nav-item href="#/pelem">Pelem</b-nav-item> 
      <b-nav-item href="#/news">Berita</b-nav-item> 
      <b-nav-item href="#/hero">Hero</b-nav-item> 
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <!-- <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form> -->

      <!-- <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>
      
      <b-nav-item-dropdown right> 
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown> -->

      <b-nav-item href="#/login" v-if="!isLogin">Login</b-nav-item> 
      <b-nav-item href="#/daftar" v-if="!isLogin">Daftar</b-nav-item> 
      <b-nav-item href="#/profile" v-if="isLogin">Profil</b-nav-item> 
      <b-nav-item href="#/manage-news" v-if="isLogin">Berita</b-nav-item> 
    </b-navbar-nav>

  </b-collapse>
    
</b-navbar>
     

  	<div class="container">
  		
  		<router-view/>

      <div class="row"> 
        <div class="col-md-12 text-center mb-5 mt-5"> 
            <hr>
            <span class="text-muted">
              <i>
                dikembangkan dengan cinta oleh  anak bangsa v.1.2
              </i>
            </span>
        </div>  
      </div>

   	</div>
  </div>
</template>

<script>

   import firebase from "firebase";

export default {
  name: 'App',
  data () {
    return { 
      isLogin: false
    }
  },
   computed:{
    cek(){
      const currentUser = firebase.auth().currentUser;
      if(currentUser){
        console.log("login")
        this.isLogin = currentUser;
      }else{
        console.log("tidak")
      }
      
      
      console.log(this.isLogin)
    }
  },
  watch: {
            // call again the method if the route changes
            '$route': 'cekLogin'
    },
    created:function(){

        this.cekLogin() 

    },
  methods:{
     cekLogin(){
            if(this.$auth.isLogin()){
                this.isLogin = true
            }else{
                this.isLogin = false
            }

            if(this.isLogin == true){
                this.cartLink = 'cart'
            }
        },
  }
}
</script>
