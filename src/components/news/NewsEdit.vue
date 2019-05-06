<template>
    <div class="mt-5"> 
 	      <b-breadcrumb :items="breadcrumb" /> 


        <b-form @submit="onSubmit">
            <h2>Edit Berita</h2>
      <b-form-group id="exampleInputGroup1"
                    label="Title"
                    label-for="exampleInput1"
                    >
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="form.title"
                      required
                      placeholder="Title">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup2"
                    label="ISI"
                    label-for="exampleInput2"
                    >
        <b-form-textarea id="exampleInput2"
                      type="text"
                      v-model="form.isi" 
                      rows="3"
                    max-rows="6"
                      placeholder="Isi berita">
        </b-form-textarea>
      </b-form-group> 
       
      <b-button type="submit" variant="primary">Simpan</b-button> 
    </b-form>


    </div>
</template>

<script>
import firebase from "firebase";   
import Loading from '@/components/Loading' 
export default {
    name: 'NewsEdit',
    components: {
        Loading 
    },
  
    data () {
        return { 
        	breadcrumb: [
                {
                    text: 'Beranda',
                    href: '#/'
                },
                {
                    text: 'Berita',
                    href: '#/manage-news'
                },
                {
                    text: 'edit',
                    active: true
                }
            ],
    		news: [],
    		form: {
                title: '',
                isi:'' 
              },
    	}
    },
    created() {
		this.ambilData();
	},
    methods:{
    	onSubmit (evt) {
	        evt.preventDefault(); 

	        var updates = {};
			updates['/news/' + this.news.id] = {
				title: this.form.title,
				isi: this.form.isi,
				tanggal: this.news.tanggal
			}; 

			firebase.database().ref().update(updates)
			this.$router.push({ path: '../../manage-news' }) 

	    },
        ambilData: function() {  

             firebase.database().ref().child('news').child(this.$route.params.id).once("value", berita => {
                this.news.id = berita.ref.key;
                this.news.tanggal = berita.child("tanggal").val();  
                this.form.title = berita.child("title").val(); 
                this.form.isi = berita.child("isi").val(); 
                 

                
            });

		},
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}
 
a {
    color: #42b983;
}
</style>