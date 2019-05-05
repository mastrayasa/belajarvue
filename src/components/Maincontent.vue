<template>
  <div class="hello mt-4"> 
   
    <div class="row">
      <div class="col-md-4"> 

        <b-list-group>
            <b-list-group-item>PHP</b-list-group-item>
            <b-list-group-item>Javascript</b-list-group-item>
            <b-list-group-item>Java</b-list-group-item>
            <b-list-group-item>C++</b-list-group-item>
            <b-list-group-item>Golang</b-list-group-item>
            <b-list-group-item>Wordpress</b-list-group-item>
            <b-list-group-item>Laravel</b-list-group-item>
            <b-list-group-item>MySQL</b-list-group-item>
            <b-list-group-item>VueJs</b-list-group-item>
        </b-list-group>  

      </div>
      <div class="col-md-8">
        
        <router-view/>
    


      </div>
    </div>
  </div>
</template>

<script>
 import firebase from "firebase";
import Slider from '@/components/Slider' 

export default {
  name: 'Home',
  components: {
    Slider
  },
  data () {
    return {
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
