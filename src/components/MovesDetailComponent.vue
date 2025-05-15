<script setup>
  import {onMounted, ref, watchEffect} from 'vue'
  import { RouterLink } from 'vue-router'
  import Photo from './Photo.vue'

  const {name} = defineProps({
    name: String
  })

  const move = ref(null)

  watchEffect(async () => {
    if (name) {
      const res = await fetch(`https://pokeapi.co/api/v2/move/${name}`)
      move.value = await res.json()
    }
  })

</script>

<template>
  <div class="container" v-if="move">

    <br>
    <h2>{{ move.name }}</h2>
    <br>

    <div @click="$emit('select-type',move.type.name)" style="cursor: pointer">
      <img class="type" :src="'/src/assets/types/'+  move.type.name  + '.png'" :alt="move.type.name"/>
    </div>

    <div v-if="move.effect_entries.length === 0" class="description">{{ move.flavor_text_entries[0].effect }}</div>
    <div v-else class="description"> {{ move.effect_entries[0].effect }}</div>

    <div>
      <p>Category :&nbsp;
        <img class="categorie" :src="'/src/assets/'+  move.damage_class.name  + '.png'" :alt="move.damage_class.name"/>
      </p>
    </div>
    <div v-if="move.power">
      <p>Power : {{ move.power }}</p>
    </div>
    <div v-else>Power : - </div>
    <div v-if="move.accuracy">
      <p>Accuracy : {{ move.accuracy }}</p>
    </div>
    <div v-else>Accuracy : - </div>

    <div v-if="move.priority >= 1">
      <p>This move always goes first</p>
    </div>

    <!--meta.ailment_chance % chances of meta.ailment
        meta.flinch_chance of flinch
        meta.drain hp drained
        meta.healing healed
        other

        if 0, do not show-->

    <br>
    <h3>Learned By</h3>
    <div class="grid">
      <div class="card" v-for="pokemon in move.learned_by_pokemon" :key="pokemon.name" @click="$emit('select-pokemon',pokemon.name)" style="cursor: pointer">
        <Photo :name="pokemon.name"></Photo>
      </div>
    </div>

  </div>
  <div v-else>Chargement...</div>
</template>

<style scoped>

.categorie {
  width: 3%;
   vertical-align:-5%;
}

.type {
  width: 6%;
}

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
