<template>
  <div class="row mt-5">
  	<div class="col-md-4"> </div>
  	<div class="col-md-4"> 
<b-card title="Daftar"
         
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
                      placeholder="Kata Sandi Baru">
        </b-form-input>
      </b-form-group>


      <b-form-group id="exampleInputGroup3"
                    label="Ulangi Kata Sandi"
                    label-for="exampleInput3">
        <b-form-input id="exampleInput3"
                      type="password"
                      v-model="form.rePassword"
                      required
                      placeholder="Ulangi Kata Sandi">
        </b-form-input>
      </b-form-group>
       
      <b-button type="submit" variant="primary">Daftar</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

     </b-card>
  	</div>
    
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
        rePassword:''
      }, 
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
        evt.preventDefault(); 
        if(this.form.password == this.form.rePassword){
            firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password).then( (user) => {
                this.$auth.setLogin("anu");
                this.$router.replace('profile')
            },
            (err)  => {
                console.log(err)
                alert("opsss" + err.message)
             });
        } else  {
            alert("Kata sandi tidak sama")
        }
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.password = ''; 
      this.form.rePassword = ''; 
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>
