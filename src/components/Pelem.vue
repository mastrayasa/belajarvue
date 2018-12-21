<template>
  <div class="row mt-5">
   
     <div class="col-md-12">

     	<b-breadcrumb :items="breadcrumb"/>

     	<h2>The Pelem</h2>
<b-card-group columns>
     	<b-card v-for="item in pelem" :title="item.title"
          :img-src="gambar(item.poster_path)"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-4">
    <p class="card-text">
      {{ item.overview.substring(0,100) }}...
    </p>

    

     


     <div slot="footer">
        <small class="text-muted">{{ item.vote_average }} / {{ item.release_date }}</small>

        <router-link :to="{ path: 'pelem/detail', query: { id: item.id }}" class="float-right">Lihat</router-link>
    </div>
   
  </b-card>
</b-card-group>
     	 

      
     </div>
  </div>
</template>

<script>
     


export default {
  name: 'Pelem',
  
  data () {
    return {
    	breadcrumb: [{
        text: 'Beranda',
        href: '#/'
      },   {
        text: 'Pelem',
        active: true
      }],
			pelem: [],
			terbaru: [],
			readMore : false
		}
  },
  created() {

		this.ambilData();
	},
  methods:{

  	gambar : function (path){
  		return 'http://image.tmdb.org/t/p/w342' + path;
  	},
     ambilData: function() {
			var url = "http://api.themoviedb.org/3/movie/popular?api_key=b5481a85cbb44c13c6c6931834845104&page=1";
			console.log(url);

			this.$http.get(url).then((res) => {
			  console.log(res.data.results)
			  this.pelem = res.data.results
			})

			 
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