// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from "firebase";

Vue.config.productionTip = false;

 let app = '';

// Initialize Firebase
var config = {
	apiKey: "AIzaSyDut4iiWSvvjLlI3gGDhldUAZg4LRKdfSk",
	authDomain: "paon-181102.firebaseapp.com",
	databaseURL: "https://paon-181102.firebaseio.com",
	projectId: "paon-181102",
	storageBucket: "paon-181102.appspot.com",
	messagingSenderId: "64908298481"
};
firebase.initializeApp(config);

/* eslint-disable no-new */

firebase.auth().onAuthStateChanged(() => {
	if(!app) {
		app = new Vue({
		  el: '#app',
		  mode: 'history',
		  router,
		  components: { App },
		  template: '<App/>'
		})
	}
});

