<script setup>
  import PokemonDetail from '../components/PokemonDetail.vue'

  const props = defineProps({
    name: String
  })

  const name = props.name
</script>

<template>
  <PokemonDetail :name="name"/>
</template>


