<template>
    <div class="row mt-5">
   
        <div class="col-md-12">

         	

         	<h2 v-if="!addNews">Manage News</h2> 

             <b-button @click="modeAddNews" v-if="!addNews" variant="outline-primary">Tambah Baru </b-button>
                
              <b-table v-if="!addNews" hover :items="news" :fields="fields">
                    <template slot="tanggal" slot-scope="data"> 
                        {{ data.value | moment("dddd, Do MMMM YYYY H:mm") }}
                    </template>
              </b-table>

              

              
            

             <b-form @submit="onSubmit" @reset="onReset" v-if="addNews">
            <h2>Tambah Berita</h2>
      <b-form-group id="exampleInputGroup1"
                    label="Title"
                    label-for="exampleInput1"
                    >
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
            }
         ],
         tanggal: 1556941867661,
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

     /* eslint-disable no-console */
    // value = snapshot.val() | id = snapshot.key
    listNews.on("child_added", snapshot => {
     // console.log("note was added: ", { ...snapshot.val(), id: snapshot.key });
      this.news.push({
          id: snapshot.key,
          title: snapshot.val().title, 
          isi: snapshot.val().isi 
        });
    });
 
    /*notesRef.on("child_removed", snapshot => {
      const deletedNote = this.notes.find(note => note.id === snapshot.key);
      console.log("note was removed: ", deletedNote);
 
      const index = this.notes.indexOf(deletedNote);
      this.notes.splice(index, 1);
      this.index = this.index === 0 ? 0 : index - 1;
    });
 
    notesRef.on("child_changed", snapshot => {
      const updatedNote = this.notes.find(note => note.id === snapshot.key);
      updatedNote.title = snapshot.val().title;
      updatedNote.content = snapshot.val().content;
      console.log("note was updated: ", updatedNote);
    });*/
    /* eslint-enable no-console */


   },
  methods:{
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
