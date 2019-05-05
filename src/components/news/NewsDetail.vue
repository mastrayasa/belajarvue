<template>
    <div> 
 	      <b-breadcrumb :items="breadcrumb" />
 	      <h2>{{ news.title }}</h2> 
        <p>
            <i class="text-muted">{{ news.tanggal | moment("dddd, Do MMMM YYYY H:mm") }} </i>
        </p>
        <div v-html="news.isi"></div>
    </div>
</template>

<script>
import firebase from "firebase";   
import Loading from '@/components/Loading' 
export default {
    name: 'NewsDetail',
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
                    text: 'Berita 2',
                    href: '#/berita'
                }
            ],
    		news: [] 
    	}
    },
    created() {
		this.ambilData();
	},
    methods:{
        ambilData: function() {  

             firebase.database().ref().child('news').child(this.$route.params.id).once("value", berita => {
                this.news.id = berita.ref.key;
                this.news.title = berita.child("title").val(); 
                this.news.isi = berita.child("isi").val(); 
                this.news.tanggal = berita.child("tanggal").val();  

                this.breadcrumb.push({
                    text: this.news.title,
                    active: true
                });
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