<script setup>
  import MovesList from '../components/MovesList.vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const goToDetail = (name) => {
    router.push(`/move/${name}`)
  }
</script>

<template>
  <MovesList @select-move="goToDetail" />
</template>
