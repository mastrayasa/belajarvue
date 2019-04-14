<template>
  <div class="row mt-5">
  	<div class="col-md-4"> </div>
  	<div class="col-md-4"> 
<b-card title="Login"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
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
       
      <b-button type="submit" variant="primary">Login</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

     </b-card>
  	</div>
    
  </div>
</template>

<script>

    //import firebase from "firebase";

export default {
  data () {
    return {
      form: {
        email: 'mastrayasa@gmail.com',
        password: '123456'
      }, 
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));

      /*var database = firebase.database();

      firebase.database().ref('member/sRzmQEkfvZiiIr8i49MB').set({
          nama: "kangmas",
          email: "email@gmail.com" 
        });*/



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
