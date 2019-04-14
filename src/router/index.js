import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Login from '@/components/Login'
import Kontak from '@/components/Kontak'
import Pelem from '@/components/Pelem'
import Pelemdetail from '@/components/Pelemdetail'
import Hero from '@/components/Hero'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
/* import firebase from "firebase";
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDLh-xuxgGz27q10EuAUeHFPqS2Ga1y1dk",
    authDomain: "blog-392cd.firebaseapp.com",
    databaseURL: "https://blog-392cd.firebaseio.com",
    projectId: "blog-392cd",
    storageBucket: "blog-392cd.appspot.com",
    messagingSenderId: "999054194231"
  };
  firebase.initializeApp(config); */

Vue.use(BootstrapVue)

Vue.use(VueAxios, axios)

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
      path: '/pelem/detail/:id',
      name: 'Pelemdetail',
      component: Pelemdetail
    },
    {
      path: '/hero',
      name: 'Hero',
      component: Hero
    }
  ]
})
