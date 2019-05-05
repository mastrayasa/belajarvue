import Vue from 'vue'
import Router from 'vue-router'
import Maincontent from '@/components/Maincontent'
import Home from '@/components/Home'
import About from '@/components/About'
import Login from '@/components/Login'
import Daftar from '@/components/Daftar'
import Kontak from '@/components/Kontak'
import Profile from '@/components/Profile'
import Pelem from '@/components/Pelem'
import Pelemdetail from '@/components/Pelemdetail'
import Hero from '@/components/Hero'
import News from '@/components/news/News'
import NewsDetail from '@/components/news/NewsDetail'
import ManageNews from '@/components/news/ManageNews'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import firebase from "firebase";
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);


const moment = require('moment')
require('moment/locale/id')
Vue.use(require('vue-moment'), {moment})

import Auth from '../Auth.js'
Vue.use(Auth)


Vue.use(BootstrapVue)

Vue.use(VueAxios, axios)

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home', 
      component: Maincontent,
      children:[
        {
          path:'',
          component: Home
        } 
      ]
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
   // { path: '*', name: 'Login', component: Login },
    { path: '/login', name: 'Login', component: Login },
    { path: '/daftar', name: 'Daftar', component: Daftar },
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
    },
    {
      path: '/news',
      meta: {label: 'News'},
      name: 'News',
      component: Maincontent,
      children:[
        {
          path:'',
          component: News
        },
        {
          path: ':id',
          meta: {label: 'News Detail'},
          name: 'NewsDetail',
          component: NewsDetail
        }
      ]
    },
    { 
      path: '/manage-news',
      name: 'ManageNews',
      component: ManageNews
    }
  ]
});

router.beforeEach((to, form,next) => {

  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some(record => record.meta.requireAuth);

  if(requireAuth && !currentUser) next('login');
 // else if(!requireAuth && currentUser) next('profile');
  else next();
});

export default router;
