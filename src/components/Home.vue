<template>
  <div class="hello mt-5">

    <div class="mb-5">
         <Slider />
    </div>
   
    <div class="row">
      <div class="col-md-4">

        <div class="text-center">


            <img src="@/assets/profil.jpg" class="img-fluid w-100 mb-3" />

            <div class="text-center">
                <h2>{{ user.nama }}</h2>
                <p>{{ user.hobi }}</p>
            </div> 
        </div> 

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
        
        <div class="row mb-3">
            <div class="col-md-12 text-center">

               
                <h1 class="text-center">{{ msg }}</h1>


                <input class="form-control" type="text" name="" v-model="msg" v-if="!showMsg" v-on:keyup.enter="submitMsg"> 
                <small v-if="!showMsg" class="text-muted">tekan enter untuk menyimpan</small>

    
                <button v-on:click="editMsg" v-if="showMsg" class="btn btn-primary btn-sm">edit pesan</button>
    
            </div>
        </div> 

        <b-card  v-for="(berita,index) in news" class="mb-4" :key="index"> 
            <b-media no-body>
                <b-media-aside vertical-align="top">
                    <img src="@/assets/server.jpeg" width="128" height="128" alt="placeholder" /> 
                </b-media-aside>
                <b-media-body class="ml-3">
                    <h5 class="mt-0">{{ berita.title }}</h5>
                    <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                    </p> 
                    <b-button size="sm" variant="primary">
                        Baca Selengkapnya
                    </b-button>
                </b-media-body>
            </b-media>
        </b-card>
    <form>
      <input placeholder="Judul Berita" type="text" name="" v-model="judul" ref="my_input">
      <button type="button" @click.prevent="kirimBerita()">kirim</button>
    </form>


      </div>
    </div>
  </div>
</template>

<script>

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
      news:[
      {title:"Server facebook di masuki kecoa"},
      {title:"Tidak ada yang tahu server itu aman sampai kapan?"},
      {title:"Server itu nampak bagus tapi ternyata..."} 
      ]
    }
  },
  methods:{
    editMsg: function(e){
      this.showMsg = false 
    },
    submitMsg: function(e){
      this.showMsg = true 
    },
    kirimBerita(){
      console.log("susu")
      if(this.judul != ""){
      this.news.push({title: this.$refs.my_input.value })
      this.judul = ""
    } else{
      alert("isi judul berita")
    }
    }
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
