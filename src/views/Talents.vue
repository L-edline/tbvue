<script setup>
  import TalentsListe from '../components/TalentsListe.vue'
  import Navbar from '@/components/Navbar.vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const goToDetail = (name) => {
    router.push(`/ability/${name}`)
  }
</script>

<template>
  <Navbar></Navbar>
  <TalentsListe @select-ability="goToDetail" />
</template>
