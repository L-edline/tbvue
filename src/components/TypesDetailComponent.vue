<script setup>
  import {onMounted, ref, watchEffect} from 'vue'
  import { RouterLink } from 'vue-router'
  import Photo from './Photo.vue'

  const {name} = defineProps({
    name: String
  })

  const type = ref(null)

  watchEffect(async () => {
    if (name) {
      const res = await fetch(`https://pokeapi.co/api/v2/type/${name}`)
      type.value = await res.json()
    }
  })

</script>

<template>
  <div class="container" v-if="type">

    <RouterLink class="menu" to="/"> RETURN TO MENU </RouterLink>
    <RouterLink class="list" to="/types"> RETURN TO LIST </RouterLink>
    <br>
    <br>

    <img class="logo" :src="'/src/assets/types/'+ type.name + '.png'" :alt="type.name" />

    <br>
    <h3>Moves</h3>
    <div class="grid">
      <div class="card" v-for="move in type.moves" :key="move.name">
        {{ move.name }}
      </div>
    </div>

    <br>
    <h3>Pokemons</h3>
    <div class="grid">
      <div class="card" v-for="pokemon in type.pokemon" :key="pokemon.pokemon.name" @click="$emit('select-pokemon',pokemon.pokemon.name)" style="cursor: pointer">
        <Photo :name="pokemon.pokemon.name"></Photo>
      </div>
    </div>

  </div>
  <div v-else>Chargement...</div>
</template>

<style scoped>

.list {
  color: black;
  background-color: rgb(253, 125, 125);
  border-style: solid;
  float: right;
}

.menu {
  color: black;
  background-color: rgb(253, 125, 125);
  border-style: solid;
  float: left;
}

.logo {
  width: 13%;
  display:inline-block;
  padding-left: 35px;
}

.container {
  text-align: center;
  background-color: rgb(239, 184, 118);
  margin:auto;
}

.card {
  border-style: solid;
  text-transform: capitalize;
  background-color: rgb(247, 198, 139);
}

.grid {
  display: grid;
  grid-template-columns: repeat(8,1fr);
  gap: 16px;
  padding: 20px;

}

.container ul {
  padding-inline-start: 3cap;
  text-align: center;
  justify-content: center;

  padding-right: 31.5088px;
}

.container li {
  text-transform: capitalize;
  list-style-type: none;
  padding-inline-end: 2cap;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
}

h2 {
  text-transform: capitalize;
  font-weight: bold;
  font-style: italic;
  font-size:xx-large;
}

h3 {
  font-weight: bold;
}
</style>
