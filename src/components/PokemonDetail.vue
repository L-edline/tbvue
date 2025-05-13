<script setup>
  import {onMounted, ref, watchEffect} from 'vue'
import { RouterLink } from 'vue-router'

  const {name} = defineProps({
    name: String
  })

  const pokemon = ref(null)

  watchEffect(async () => {
    if (name) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      pokemon.value = await res.json()
    }
  })

</script>

<template>

  <div class="container" v-if="pokemon">

    <RouterLink class="menu" to="/"> RETURN TO LIST </RouterLink>
    <br>

    <br>
    <h2>{{ pokemon.name }}</h2>

    <img class="sprite" :src="pokemon.sprites.front_default" alt="sprite" />

    <ul>
      <li v-for="type in pokemon.types" :key="type.type.name">
        <img :src="'/src/assets/types/'+ type.type.name + '.png'" :alt="type.type.name" />
      </li>
    </ul>

    <br>
    <audio controls :src="pokemon.cries.latest" type="audio/ogg"></audio>

    <h3>Abilities</h3>
    <ul>
      <li v-for="ability in pokemon.abilities" :key="ability.ability.name">
        {{ability.ability.name}}
      </li>
    </ul>

    <br>
    <h3>Statistics</h3>
    <ul class="stats">
      <li class="stat" v-for="stat in pokemon.stats" :key="stat.stat.name">
        {{ stat.stat.name }} : {{ stat.base_stat }}
      </li>
    </ul>

    <br>
    <h3>Movepool</h3>
    <div class="grid">
      <div class="card" v-for="move in pokemon.moves" :key="move.move.name">
        {{ move.move.name }}
      </div>
    </div>

  </div>
  <div v-else>Chargement...</div>
</template>

<style scoped>

.menu {
  color: black;
  background-color: rgb(253, 125, 125);
  border-style: solid;
  float: right;

}

.sprite {
  width: 15%;
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
