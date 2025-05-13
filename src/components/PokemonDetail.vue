<script setup>
  import {ref, watchEffect} from 'vue'

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
    <h2>{{ pokemon.name }}</h2>
    <img :src="pokemon.sprites.front_default" alt="sprite" />
    <ul>
      <li v-for="type in pokemon.types" :key="type.type.name">
        <img :src="'/src/assets/types/'+ type.type.name + '.png'" :alt="type.type.name" />
        <!--{{type.type.name}}-->
      </li>
    </ul>
    <h3>Abilities</h3>
    <ul>
      <li v-for="ability in pokemon.abilities" :key="ability.ability.name">
        {{ability.ability.name}}
      </li>
    </ul>
    <h3>Statistics</h3>
    <ul>
      <li v-for="stat in pokemon.stats" :key="stat.stat.name">
        {{ stat.stat.name }} {{ stat.base_stat }}
      </li>
    </ul>
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

.card {
  border-style: solid;
  text-transform: capitalize;
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
  display: flex;
}

.container li {
  text-transform: capitalize;
  list-style-type: none;
  padding-inline-end: 2cap;
  text-align: center;
}

h2 {
  text-transform: capitalize;
  font-weight: bold;
  font-style: italic;
  font-size:xx-large;
}

h3 {
  padding-left: 10px;
  font-weight: bold;
}
</style>
