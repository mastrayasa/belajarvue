<template>
    <div>
   
        <b-breadcrumb :items="breadcrumb" />

        <h2>Berita</h2>

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
import firebase from "firebase";    
import Loading from '@/components/Loading' 

export default {
  name: 'News',
  components: {
    Loading 
  },
  filters: {
  
        truncate: function(string) {
          return string.substring(0, 100) + '...';
        }
      
    },
    data () {
        return {
          isLoading:true,
        	breadcrumb: [
                {
                    text: 'Beranda',
                    href: '#/'
                },   
                {
                    text: 'Berita',
                    active: true
                }
            ],
    		news: [] 
    	}
    },
    created() {

		this.getNews();
        console.log("created")
	},
    methods:{
  	 
        getNews: function() {

            var listNews = firebase.database().ref().child('news').orderByChild('tanggal/last');

             listNews.once("value", news => {
              this.isLoading = false;
              news.forEach(berita => {
                this.news.push({
                  id: berita.ref.key,
                  title: berita.child("title").val(),
                  isi: berita.child("isi").val(),
                  tanggal: berita.child("tanggal").val()
                });
              });
            });
			     this.loading = false
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
