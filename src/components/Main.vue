<template>
  <div class="hello">
    <header class="header">
        <div class="wrapper">
          <img src="https://i.imgur.com/scrcyJ3.png" width="80" height="67" />
          <a class="btnAdd" href="#" @click="modal=!modal"
            >Add video<img src="@/assets/icon-add.png" width="30" height="30"
          /></a>
        </div>
      </header>    
    <form id="formPet" class="form" :class="{ active: modal, hidden: !modal }">
      <h3>Agregar Video</h3>
      <div class="form__grid">
        <div>
          <input type="text" placeholder="Titulo" v-model="movies.title"/>
        </div>
        <div>
          <input type="text" placeholder="Url-video" v-model="movies.url"/>
        </div>
      </div>
      <div>
        <textarea cols="30" rows="10" placeholder="Descripcion" v-model="movies.description"></textarea>
      </div>
      <div class="btnModal">
        <button @click="addVideo">Agregar</button>
        <button @click="modal=false" class="btnCancelar">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      modal: false,
      videos: [],
      movies: {      
        url: '',
        title: '',
        views: '2',
        description: ''      
      }
    };
  },
  methods: {
    addVideo() {
      return fetch("http://localhost:3000/videos", {
        method: "POST",
        body: JSON.stringify(this.movies),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => this.videos = data);
        // this.$router.push(`/list/`)
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 100%;
  height: 90px;
  margin: auto;
  background: #3973b6;
  box-shadow: 0 2px 4px #000; }

.wrapper {
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em; }

.btnAdd {
  padding: 20px;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 3px #fff; }
  .btnAdd:hover {
    background: #4483ca; }
  .btnAdd img {
    margin-left: 10px; }
    
.form {
  width: 500px;
  height: auto;
  background: #fff;
  top: 30%;
  left: 30%;
  padding: 25px;
  text-align: center;
  box-shadow: 0 0 6px #000;
  position: absolute;
}
.form__grid {
  margin-bottom: 25px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 1fr 1fr;
}
.form h3 {
  margin-bottom: 25px;
}
.form input {
  width: 100%;
  padding: 10px;
}
.form textarea {
  width: 100%;
  height: 150px;
  padding: 15px;
  resize: none;
}
.form .btnModal {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
}
.form .inpAceptar {
  width: 140px;
  line-height: 10px;
}
.form button {
  width: 140px;
  height: 36px;
}

.active {
  display: block;
}

.hidden {
  display: none;
}
</style>
