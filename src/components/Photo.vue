<script setup>
  import {ref, onMounted} from 'vue'

  const {name} = defineProps({
    name: String
  })

  const pokemon = ref(null)

  onMounted(async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    pokemon.value = await res.json()
  })

</script>

<template>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" alt="sprite" />
    <div class="nomtruc">{{ pokemon.name }}</div>
  </div>
  <div v-else>
    <br>
    <!--<img class="loading" src="@/assets/loading.png" alt="sprite" />-->
    Chargement...
  </div>
</template>

<style>
  .loading {
    width: 40px;
  }
</style>
