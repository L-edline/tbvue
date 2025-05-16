<script setup>
  import {onMounted, ref, watchEffect} from 'vue'
  import { RouterLink } from 'vue-router'
  import Photo from './Photo.vue'

  const {name} = defineProps({
    name: String
  })

  const ability = ref(null)

  watchEffect(async () => {
    if (name) {
      const res = await fetch(`https://pokeapi.co/api/v2/ability/${name}`)
      ability.value = await res.json()
    }
  })

</script>

<template>
  <div class="container" v-if="ability">

    <br>
    <h2>{{ ability.name }}</h2>
    <br>

    <h3>Effects</h3>
    <div v-if="ability.effect_entries.length === 0">Pas de description</div>
    <div v-else-if="ability.effect_entries[0].language.name === 'en'" class="description">{{ ability.effect_entries[0].effect }}</div>
    <div v-else class="description">{{ ability.effect_entries[1].effect }}</div>

    <h3>Pokemons</h3>
    <div class="flexgrid">
      <div class="card" v-for="pokemon in ability.pokemon" :key="pokemon.pokemon.name" @click="$emit('select-pokemon',pokemon.pokemon.name)" style="cursor: pointer">
        <Photo :name="pokemon.pokemon.name"></Photo>
      </div>
    </div>

  </div>
  <div v-else>Chargement...</div>
</template>

<style scoped>

.description {
  margin-top: 2%;
  margin-bottom: 2%;
  font-style: italic;
}

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

.card {
  border-style: solid;
  text-transform: capitalize;
  background-color: rgb(247, 198, 139);
  margin: 10px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(8,1fr);
  gap: 16px;
  padding: 20px;

}

.container {
  text-align: center;
  background-color: rgb(239, 184, 118);
  margin:auto;
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
