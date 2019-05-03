<template>
    <div class="row mt-5">
   
        <div class="col-md-12">

         	<b-breadcrumb :items="breadcrumb" />

         	<h2>Berita</h2>

            <Loading v-if="loadingPelem" />

            <b-card-group columns>
                <b-card v-for="(item,index) in news" :title="item.title"
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
     
import Loading from '@/components/Loading'
import Modalpelem from '@/components/Modalpelem'

export default {
  name: 'News',
  components: {
    Loading,
    Modalpelem
  },
  
  data () {
    return {
        loadingPelem:true,
    	breadcrumb: [{
        text: 'Beranda',
        href: '#/'
      },   {
        text: 'Berita',
        active: true
      }],
			news: [] 
		}
  },
  created() {

		this.ambilData();
	},
  methods:{
  	 
     ambilData: function() {

      var config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};
			var url = " "; 

			this.$http.get(url).then((res) => {
       // console.log(res)
			  this.news = res.data.items
			})

			 this.loadingPelem = false
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
