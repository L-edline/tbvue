<script setup>
  import {onMounted, ref, watch, watchEffect} from 'vue'
  import { RouterLink } from 'vue-router'
  import Photo from './Photo.vue'

  const props = defineProps({
    name: String
  })

  const type = ref(null)

  watch(
    () => props.name,
    async (newName) => {
      if (newName)  {
        type.value = null
        const res = await fetch(`https://pokeapi.co/api/v2/type/${newName}`)
        type.value = await res.json()
      }
    },
    { immediate: true}
  )

</script>

<template>
  <div class="container" v-if="type">
    <br>

    <img class="logo" :src="'/src/assets/types/'+ type.name + '.png'" :alt="type.name" />

    <!--damage relations-->
    <p class="offdef">Offensive Effectiveness</p>
    <div class="cont">
      <ul class="liste">
        <p>Strong against</p>
        <li v-for="effect in type.damage_relations.double_damage_to" :key="effect.name" @click="$emit('select-type',effect.name)" style="cursor: pointer">
          <img :src="'/src/assets/types/'+ effect.name + '.png'" :alt="effect.name"/>
        </li>
      </ul>
      <ul class="liste">
        <p>Weak against</p>
        <li v-for="effect in type.damage_relations.half_damage_to" :key="effect.name" @click="$emit('select-type',effect.name)" style="cursor: pointer">
          <img :src="'/src/assets/types/'+ effect.name + '.png'" :alt="effect.name"/>
        </li>
      </ul>
      <ul class="liste">
        <p>No effect against</p>
        <li v-for="effect in type.damage_relations.no_damage_to" :key="effect.name" @click="$emit('select-type',effect.name)" style="cursor: pointer">
          <img :src="'/src/assets/types/'+ effect.name + '.png'" :alt="effect.name"/>
        </li>
      </ul>
    </div>

    <p class="offdef">Defensive Effectiveness</p>
    <div class="cont">
      <ul class="liste">
        <p>Weak to</p>
        <li v-for="effect in type.damage_relations.double_damage_from" :key="effect.name" @click="$emit('select-type',effect.name)" style="cursor: pointer">
          <img :src="'/src/assets/types/'+ effect.name + '.png'" :alt="effect.name"/>
        </li>
      </ul>
      <ul class="liste">
        <p>Resists</p>
        <li v-for="effect in type.damage_relations.half_damage_from" :key="effect.name" @click="$emit('select-type',effect.name)" style="cursor: pointer">
          <img :src="'/src/assets/types/'+ effect.name + '.png'" :alt="effect.name"/>
        </li>
      </ul>
      <ul class="liste">
        <p>Immune to</p>
        <li v-for="effect in type.damage_relations.no_damage_from" :key="effect.name" @click="$emit('select-type',effect.name)" style="cursor: pointer">
          <img :src="'/src/assets/types/'+ effect.name + '.png'" :alt="effect.name"/>
        </li>
      </ul>
    </div>

    <br>
    <h3>Moves</h3>
    <div class="grid">
      <div class="card" v-for="move in type.moves" :key="move.name" @click="$emit('select-move',move.name)" style="cursor: pointer">
        <p class="nomtruc">{{ move.name }}</p>
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

.offdef {
  margin-top: 10px;
  margin-bottom: 10px;
  font-family:'Press Start 2P';
  font-size: smaller;
}

.cont {
  display: flex;
  justify-content: center;
}

.liste {
  display: table-cell;
  border-style: solid;
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
