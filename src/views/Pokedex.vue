<script setup>
  import PokemonList from '../components/PokemonList.vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const goToDetail = (name) => {
  router.push(`/pokemon/${name}`)
}
</script>

<template>
  <PokemonList @select-pokemon="goToDetail" />
</template>

