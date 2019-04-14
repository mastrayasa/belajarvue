<template>
    <div class="row">
   
        <div class="col-md-12">

			<b-img-lazy :src="gambar(pelem.poster_path)" fluid-grow  alt="img1" />
			
			<h1>{{ pelem.title }}</h1>
			 <p class="card-text">
                        {{ pelem.overview }}
                    </p>
            <small class="text-muted">{{ pelem.vote_average }} / {{ pelem.release_date }}</small>

        </div>
    </div>
</template>

<script>
     
import storepelem from '../store/pelem'; 

export default {
  name: 'Pelem', 

  computed:{
		pelem(){
			return storepelem.state.pelem
		}
	},
	

 
  methods:{
  	 
  	gambar : function (path){
  		return 'http://image.tmdb.org/t/p/w342' + path;
  	} 
  }
}
</script>
