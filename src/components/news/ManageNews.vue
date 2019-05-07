<template>
    <div class="row mt-5">
        <div class="col-md-12">
         	<h2 v-if="!addNews">Manage News</h2> 
             <b-button @click="modeAddNews" v-if="!addNews" variant="outline-primary">Tambah Baru </b-button>
                
              <b-table v-if="!addNews" hover outlined :items="news" :fields="fields">
                    <template slot="tanggal" slot-scope="data"> 
                        {{ data.value | moment("dddd, Do MMMM YYYY H:mm") }}
                    </template>

                    <template slot="aksi" slot-scope="row"> 
                    <a class="btn btn-outline-danger" :href="`#/manage-news/edit/${ row.item.id }`">edit</a>

                    <b-button @click="hapusNews(row.item)" variant="outline-primary">hapus</b-button> 

                  </template>
              </b-table>

             <b-form @submit="onSubmit" @reset="onReset" v-if="addNews">
                <h2>Tambah Berita</h2>
      <b-form-group id="exampleInputGroup1"
                    label="Title"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="form.title"
                      required
                      placeholder="Title">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup2"
                    label="ISI"
                    label-for="exampleInput2"
                    >
        <b-form-textarea id="exampleInput2"
                      type="text"
                      v-model="form.isi" 
                      rows="3"
                    max-rows="6"
                      placeholder="Isi berita">
        </b-form-textarea>
      </b-form-group> 
       
      <b-button type="submit" variant="primary">Tambah</b-button> 
      <b-button @click="addNews = false" type="button" variant="default">Batal</b-button> 
              </b-form>

        </div> 
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
  
  data () {
    return {
          fields: [
            {
                key:"title",
                label: 'Judul',
                sortable: true,
            },
            {
                key:"tanggal",
                label: 'Dibuat',
                sortable: true,
            },
            {
                key:"aksi",
                label: 'Aksi' 
            }
         ], 
          addNews:false, 
		      news: [],
        form: {
                title: '',
                isi:'' 
              }, 
		}
  },
   created(){

    var listNews = firebase.database().ref().child('news');

     /*listNews.once("value", notes => {
      notes.forEach(note => {
        this.news.push({
          id: note.ref.key,
          title: note.child("title").val(),
          isi: note.child("isi").val(),
          tanggal: note.child("tanggal").val()
        });
      });
    });*/

     /* eslint-disable no-console */
    // value = snapshot.val() | id = snapshot.key
    listNews.on("child_added", snapshot => {
     // console.log("note was added: ", { ...snapshot.val(), id: snapshot.key });
      this.news.push({
          id: snapshot.key,
          title: snapshot.val().title, 
          isi: snapshot.val().isi ,
          tanggal: snapshot.val().tanggal 
        });
    });
 
    listNews.on("child_removed", snapshot => {
      const deletedNote = this.news.find(note => note.id === snapshot.key);
      console.log("note was removed: ", deletedNote);
 
      const index = this.news.indexOf(deletedNote);
      this.news.splice(index, 1);
      this.index = this.index === 0 ? 0 : index - 1;
    });
  
    listNews.on("child_changed", snapshot => {
      const updatedNote = this.news.find(note => note.id === snapshot.key);
      updatedNote.title = snapshot.val().title;
      updatedNote.isi = snapshot.val().isi;
      console.log("note was updated: ", updatedNote);
    });
    /* eslint-enable no-console */


   },
  methods:{
    hapusNews(news){
       this.$swal({
                   title: 'Hapus?',
                    text: "Data akan dihapus secara permanen",
                    type: 'question',
                    showCancelButton: true, 
                    confirmButtonText: 'Hapus',
                    cancelButtonText: 'Batal', 
                    showLoaderOnConfirm: true,
                    reverseButtons: false,
                    closeOnConfirm: false 
                }).then((result) => {
                    
                  if (result.value) {

                    let userRef = firebase.database().ref('news/' + news.id); 
                    userRef.remove() 

                    this.$swal({
                        type:'success',
                        title: 'Deleted!',
                        showConfirmButton: false,
                        text: 'Berita terhapus!',
                        timer: 2000 
                    }) 
                  }  else if (result.dismiss === 'cancel') { 
                  }
                }) 
      
    },
    modeAddNews(){
        this.addNews = true;
    },
     onSubmit (evt) {
        evt.preventDefault();
        
        if(this.writeNewPost(this.form.title,this.form.isi,"tanggal")){
            this.resetForm();
            this.addNews = false;
        }


    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.resetForm();
      
    },
    resetForm(){
        this.form.title = '';
        this.form.isi = ''; 
    },
  	 
    writeNewPost(title, body,tanggal) { 

        // Get a key for a new Post.
        var newPostKey = firebase.database().ref().child('news').push().key;

        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates['/news/' + newPostKey] = { 
            title: title,
            isi: body,
            tanggal: firebase.database.ServerValue.TIMESTAMP
          };
  
        return firebase.database().ref().update(updates);
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
