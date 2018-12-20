<template>
  <div class="hello">
    <div class="row">
      <div class="col-md-4">

        <div class="text-center">
          <h2>{{ user.nama }}</h2>
         <p>{{ user.hobi }}</p>
        </div>  

      </div>
      <div class="col-md-8">
        
        <h1 v-if="showMsg">{{ msg }}</h1>
    <input class="form-control" type="text" name="" v-model="msg" v-else v-on:keyup.enter="submitMsg">

    <small v-if="!showMsg" class="text-muted">tekan enter untuk menyimpan</small>

    
    <button v-on:click="editMsg" v-if="showMsg" class="btn btn-primary btn-sm">edit pesan</button>

 
    

     

    <p><strong>Berita</strong></p>
    
     

      <b-card  v-for="berita in news" class="mb-4"> 
  <b-media no-body>
    <b-media-aside vertical-align="center">
      <b-img blank blank-color="#ccc" width="128" height="128" alt="placeholder" />
    </b-media-aside>
    <b-media-body class="ml-3">
      <h5 class="mt-0">{{ berita.title }}</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
        in faucibus.
      </p> 
      
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
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome',
      judul:"",
      showMsg:true,
      user:{
        nama:"Mastra",
        hobi:"ngoding"
      },
      news:[
      {title:"Maling teriak maling 1"},
      {title:"Maling teriak maling 2"},
      {title:"Maling teriak maling 3"} 
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
