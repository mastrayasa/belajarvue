<template>
    <div class="row mt-5">
   
        <div class="col-md-12">

         	<b-breadcrumb :items="breadcrumb" />

         	<h2>The Pelem</h2>

            <Loading v-if="isLoading" />

            <b-card-group columns>
                <b-card v-for="(item,index) in pelem" :title="item.title"
                      :img-src="gambar(item.poster_path)"
                      img-alt="Image"
                      img-top
                      tag="article"
                      :key="item.id"
                      style="max-width: 20rem;"
                      class="mb-4">

                    <p class="card-text">
                        {{ item.overview.substring(0,100) }}...
                    </p> 
                    <div slot="footer">
                        <small class="text-muted">{{ item.vote_average }} / {{ item.release_date }}</small>
                        <button @click="lihatPelem(index)">Liat di Modal</button>

                        <router-link :to="{ path: 'pelem/detail/' + item.id}" class="float-right">Lihat</router-link>
                    </div>
              </b-card>
            </b-card-group>

        </div>

        <b-modal id="modal1" v-b-modal.modallg ref="modal1" title="Detail Pelem">
		     <Modalpelem />
		  </b-modal>

    </div>
</template>

<script>
     
import storepelem from '../store/pelem';
import Loading from '@/components/Loading'
import Modalpelem from '@/components/Modalpelem'

export default {
  name: 'Pelem',
  components: {
    Loading,
    Modalpelem
  },
  data () {
    return {
        isLoading:true,
    	breadcrumb: [{
        text: 'Beranda',
        href: '#/'
      },   {
        text: 'Pelem',
        active: true
      }],
			pelem: [] 
		}
  },
  created() {
		this.ambilData();
	},
  methods:{
  	lihatPelem: function(index){
  		storepelem.dispatch("savePelem",this.pelem[index])
  		this.$refs.modal1.show() 
	},
  	gambar : function (path){
  		return 'http://image.tmdb.org/t/p/w342' + path;
  	},
     ambilData: function() {
			var url = "http://api.themoviedb.org/3/movie/popular?api_key=b5481a85cbb44c13c6c6931834845104&page=1"; 
			this.$http.get(url).then((res) => {
			  this.isLoading = false
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