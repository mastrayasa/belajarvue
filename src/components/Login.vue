<template>
  <div class="row mt-5">
  	<div class="col-md-4"> </div>
  	<div class="col-md-4"> 

      <Loading v-if="isLoading" />
<b-card title="Login"
          v-if="!isLoading"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">

  		<b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="Alamat Email"
                    label-for="exampleInput1"
                    >
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup2"
                    label="Kata Sandi"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Kata Sandi">
        </b-form-input>
      </b-form-group>
       
      <b-row>
        <b-col><b-button block type="submit" variant="primary">Login</b-button></b-col> 
        <b-col><b-button block type="reset" variant="danger">Reset</b-button></b-col> 
      </b-row>
      <hr>
      <p>
          belum punya akun? <router-link :to="'daftar'">Daftar disini</router-link>
      </p>
    </b-form>

     </b-card>
  	</div>
    
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import firebase from "firebase";

export default {
  components: {
    Loading
  },
  data () {
    return {
      isLoading:false,
      form: {
        email: '',
        password: ''
      }, 
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
        evt.preventDefault();
        this.isLoading = true;
       // alert(JSON.stringify(this.form));

         

        firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password).then(  (user) => {
          this.isLoading = false;
          this.$auth.setLogin("isLogin");
          this.$router.replace('profile')
        } ,
          (err)  => {
            this.isLoading = false;
            alert("opsss" + err.message)
         });


    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.password = ''; 
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>
