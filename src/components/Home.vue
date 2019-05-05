<template>
  <div class="hello mt-4">
    <div class="mb-5">
         <Slider />
    </div>
    <div class="row mb-3">
      <div class="col-md-12 text-center">
        <h1 class="text-center">{{ msg }}</h1>
        <input class="form-control" type="text" name="" v-model="msg" v-if="!showMsg" v-on:keyup.enter="submitMsg"> 
        <small v-if="!showMsg" class="text-muted">tekan enter untuk menyimpan</small>
        <button v-on:click="editMsg" v-if="showMsg" class="btn btn-primary btn-sm">edit pesan</button>
      </div>
    </div> 

    <Loading v-if="isLoading" /> 

    <b-card  v-for="(berita,index) in news" class="mb-4" :key="index"> 
      <b-media no-body>
          <b-media-aside vertical-align="top">
            <img src="@/assets/server.jpeg" width="128" height="128" alt="placeholder" /> 
          </b-media-aside>
          <b-media-body class="ml-3">
            <h5 class="mt-0">
              <strong>{{ berita.title }}</strong>
            </h5>
            <p>
              <i class="text-muted">{{ berita.tanggal | moment("dddd, Do MMMM YYYY H:mm") }} </i>
              <br>
              {{ berita.isi | truncate }}
              <br>
              <router-link :to="'news/' + berita.id ">Selengkapnya</router-link>
            </p> 
          </b-media-body>
        </b-media>
      </b-card>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import firebase from "firebase";
import Slider from '@/components/Slider' 
export default {
  name: 'Home',
  components: {
    Slider, Loading
  },
  filters: {
  
        truncate: function(string) {
          return string.substring(0, 100) + '...';
        }
      
    },
  data () {
    return {
      isLoading:true,
      msg: 'Selamat datang di website ini kawan ku',
      judul:"",
      showMsg:true,
      user:{
        nama:"Mastra",
        hobi:"ngoding"
      },
      news:[]
    }
  },
  created(){

    var listNews = firebase.database().ref().child('news').orderByChild('tanggal/last');

     listNews.once("value", notes => {
      this.isLoading = false
      notes.forEach(note => {
        this.news.push({
          id: note.ref.key,
          title: note.child("title").val(),
          isi: note.child("isi").val(),
          tanggal: note.child("tanggal").val()
        });
      });
    });

      

   },
  methods:{
    editMsg: function(e){
      this.showMsg = false 
    },
    submitMsg: function(e){
      this.showMsg = true 
    },
    /*kirimBerita(){
      console.log("susu")
      if(this.judul != ""){
      this.news.push({title: this.$refs.my_input.value })
      this.judul = ""
    } else{
      alert("isi judul berita")
    }
    }*/
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
