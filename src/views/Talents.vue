<script setup>
  import TalentsListe from '../components/TalentsListe.vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const goToDetail = (name) => {
    router.push(`/ability/${name}`)
  }
</script>

<template>
  <TalentsListe @select-ability="goToDetail" />
</template>
