<template>
  <div>
    <h1>Lista de videos</h1>
    <main class="main">
        <div class="grid">
          <div class="card" v-for="(video, index) in videos" :key="index">
            <a id="btnEdit" class="card__edit is-active" href="#">
              <img src="@/assets/icon-edit.png" alt="Edit" width="30" />
            </a>
            <a id="btnDelete" class="card__delete is-active" href="#">
              <img
                src="@/assets/icon-delete.png"
                alt="Delete"
                width="30"
                
              />
            </a>
            <div class="card__content">
              <img
                class="card__image"
                width="210"
                height="150"
                src=""
              />
              <h2 class="card__title">{{video.title}}</h2>              
              <p class="card__views">{{video.views}} visitas</p>
              <p class="card__description">
                {{video.description}}
              </p>
            </div>
          </div>
        </div>
      </main>
  </div>
</template>

<script>
export default {
  name: 'Listar',
  data() {
    return {
      videos: [],
    }
  },
  created() {
    fetch("http://localhost:3000/videos")
        .then(res => {
          return res.json()
        })
        .then(data => {
          // console.log(data)
          this.videos = data  
        })
        .catch(err => {
          console.log(err)
        })  
  },
}
</script>

<style scoped>
.main {
  width: 100%;
  height: auto;
  max-width: 1200px;
  margin: auto; }

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-top: 25px; }

  .card {
  height: auto;
  background: #fff;
  box-shadow: 0 0 3px #2261a8;
  position: relative; }
  .card:hover {
    box-shadow: 0 0 5px #2261a8; }
  .card__edit {
    position: absolute;
    top: 10px;
    left: 10px;
    display: none; }
  .card__delete {
    position: absolute;
    top: 10px;
    right: 10px;
    display: none; }
  .card:hover .is-active {
    display: block; }
  .card__content {
    padding: 1.4em;
    text-align: center; }
  .card__title {
    font-size: 1.3em;
    letter-spacing: 3px;
    color: olivedrab;
    font-family: "HelveticaWorld-Bold"; }
  .card__app {
    font-size: 1.3em;
    letter-spacing: 3px;
    color: olivedrab;
    font-family: "HelveticaWorld-Bold"; }
  .card__image {
    margin: 0.4em 0; }
  .card__views {
    margin: 0.2em 0;
    font-size: .92em;
    letter-spacing: 2px;
    color: #535353; }
  .card__description {
    text-align: justify;
    font-size: 0.9em;
    color: #707070;
    letter-spacing: 1px; }
</style>