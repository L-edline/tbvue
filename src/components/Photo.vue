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
    <div>{{ pokemon.name }}</div>
  </div>
  <div v-else>
    Chargement...
  </div>
</template>


