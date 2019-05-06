<template>
  <div class="hi">  
    <router-view/> 
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
