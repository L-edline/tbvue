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

    <br>
    <h2>{{ pokemon.name }}</h2>

    <img class="sprite" :src="pokemon.sprites.front_default" alt="sprite" />
    <!-- other.showdown. -->

    <ul>
      <li v-for="type in pokemon.types" :key="type.type.name" @click="$emit('select-type',type.type.name)" style="cursor: pointer">
        <img :src="'/src/assets/types/'+ type.type.name + '.png'" :alt="type.type.name"/>
      </li>
    </ul>

    <br>
    <audio controls :src="pokemon.cries.latest" type="audio/ogg"></audio>

    <h3>Abilities</h3>
    <div class="flex">
      <div class="card" id="talent" v-for="ability in pokemon.abilities" :key="ability.ability.name" @click="$emit('select-ability',ability.ability.name)" style="cursor: pointer">
        <p id="nomTalent" class="nomtruc">{{ability.ability.name}}</p>
      </div>
    </div>

    <br>
    <h3>Statistics</h3>
    <div class="stats">
      <div class="ligne" v-for="stat in pokemon.stats" :key="stat.stat.name">
        <p class="stat">{{ stat.stat.name }} : {{ stat.base_stat }} </p>
      </div>
    </div>

  <!-- Simulateur Faiblesses/Résistances, ou boutton vers simulateur -->

    <br>
    <h3>Movepool</h3>
    <div class="flexgrid">
      <div class="card" v-for="move in pokemon.moves" :key="move.move.name" @click="$emit('select-move',move.move.name)" style="cursor: pointer">
        <p class="nomtruc" id="truc">{{ move.move.name }}</p>
      </div>
    </div>

    <!-- Evolves into (PHoto avec propriété evolves into de l'api)-->

  </div>
  <div v-else>Chargement...</div>
</template>

<style scoped>

.ligne {
  display: flex;
  justify-content: center;
}

.stat {
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 2px;
  border-style: solid;
  background-color: white;
  border-radius: 5px;
  text-transform: capitalize;
}

.flex {
  display: flex;
  justify-content: center;
}

#talent {
  background-color: rgb(239, 184, 118);;
  border-style: none;
  flex: auto auto auto;
}

#nomTalent {
  border-style: solid;
  margin-top: 5px;
  border-radius: 15px;
  background-color: white;
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

.sprite {
  width: 15%;
}

.card {
  border-style: solid;
  text-transform: capitalize;
  background-color: white;
  margin: 5px;

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

