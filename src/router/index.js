import Vue from 'vue'
import Router from 'vue-router'

/*import firebase from "firebase";
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDLh-xuxgGz27q10EuAUeHFPqS2Ga1y1dk",
    authDomain: "blog-392cd.firebaseapp.com",
    databaseURL: "https://blog-392cd.firebaseio.com",
    projectId: "blog-392cd",
    storageBucket: "blog-392cd.appspot.com",
    messagingSenderId: "999054194231"
  };
  firebase.initializeApp(config);*/



import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import Home from '@/components/Home'
import About from '@/components/About'
import Login from '@/components/Login'
import Kontak from '@/components/Kontak'
import Pelem from '@/components/Pelem'
import Hero from '@/components/Hero'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/kontak',
      name: 'Kontak',
      component: Kontak
    },
    {
      path: '/pelem',
      name: 'Pelem',
      component: Pelem
    },
    {
      path: '/hero',
      name: 'Hero',
      component: Hero
    }
  ]
})
