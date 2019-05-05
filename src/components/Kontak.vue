<template>

<div>
	<div class="row mt-4"> 
     <div class="col-md-12">

     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310835.13342499925!2d119.71051622755235!3d-0.8982370121997003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8bedddc3b33bc3%3A0xe8d2949dc802f52a!2sDinas+Pendidikan+-+Kota+Palu!5e1!3m2!1sid!2sid!4v1545372663926" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>

     </div>

 	</div>

 	<div class="row mt-4"> 

     <div class="col-md-6">

     	  <h2>Hubungi kami</h2>
      	<b>PT. Maju Mundur Bersama</b> <br>
      	Jl. Kartini No.41 Kota Palu Sulawesi Tengah, Indonesia
     </div>

     <div class="col-md-6">

     	<h2>Form Kontak</h2>

		<b-form-group
			id="fieldset1"
			label="Nama"
			label-for="input1"
			:invalid-feedback="invalidFeedback"
			:valid-feedback="validFeedback"
			:state="state">
			<b-form-input id="input1" :state="state" v-model.trim="name"></b-form-input>
		</b-form-group>

		<b-form-group
			id="fieldset1e"
			label="Email"
			label-for="input2" >
			<b-form-input id="input2"   v-model.trim="email"></b-form-input>
		</b-form-group>

		<b-form-group
			id="fieldset1ee" 
			label="Pesan"
			label-for="textarea1" >
			<b-form-textarea id="textarea1"
                     v-model="text" 
                     placeholder="Ketik Pesan anda disini"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
			 
		</b-form-group>

		 <button type="button" class="btn btn-primary">Kirim Pesan</button>

     </div>
  </div>
</div>

</template>

<script>
export default {
  computed: {
    state () {
      return this.name.length >= 4
    },
    invalidFeedback () {
      if (this.name.length > 4) {
        return ''
      } else if (this.name.length > 0) {
        return 'Ketik minimal 4 karakter'
      } else {
        return 'Ketik sesuatu disini'
      }
    },
    validFeedback () {
      return this.state === true ? 'Thank you' : ''
    }
  },
  data () {
    return {
      name: 'john doe',
      email:'info@example.com',
      text:'halo'
    }
  }
}
</script>
