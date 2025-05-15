<script setup>
  import Navbar from '@/components/Navbar.vue'
  import MovesList from '../components/MovesList.vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const goToDetail = (name) => {
    router.push(`/move/${name}`)
  }
</script>

<template>
  <Navbar />
  <MovesList @select-move="goToDetail" />
</template>
