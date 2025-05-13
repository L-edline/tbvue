<script setup>
  import {ref, onMounted} from 'vue'
  import Photo from './Photo.vue'

  const pokemons = ref([])

  onMounted(async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1302`)
    const data = await res.json()
    pokemons.value = data.results
  })
</script>

<template>
  <img src="@/assets/logo.png" alt="sprite" />
  <div class="grid">
    <li
      v-for="pokemon in pokemons"
      :key="pokemon.name"
      @click="$emit('select-pokemon',pokemon.name)"
      style="cursor: pointer"
    >
      <Photo :name="pokemon.name"></Photo>

    </li>
  </div>
</template>

<style scoped>
img {
  width: 40%;
  margin: auto;
}
.grid {
display: grid;
grid-template-columns: repeat(8,1fr);
gap: 16px;
padding: 20px;
}

li {
  text-transform: capitalize;
  list-style-type: none;
  text-align: center;
  border: 10px;
  border-style: solid;
  border-color: rgb(240, 90, 90);
  background-color: white;
}
</style>
<!--Faire un nouveau composant-->
