<script setup>
  import PokemonDetail from '../components/PokemonDetail.vue'
  import { useRouter } from 'vue-router'
  import Navbar from '@/components/Navbar.vue'

  const props = defineProps({
    name: String
  })

  const name = props.name

  const router = useRouter()

  const goToDetail = (name) => {
    router.push(`/type/${name}`)
  }

  const goToDetailAbility = (name) => {
    router.push(`/ability/${name}`)
  }

  const goToDetailMove = (name) => {
    router.push(`/move/${name}`)
  }
</script>

<template>
  <Navbar></Navbar>
  <PokemonDetail :name="name" @select-type="goToDetail" @select-ability="goToDetailAbility" @select-move="goToDetailMove"/>
</template>


