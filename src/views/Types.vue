<script setup>
  import TypesListe from '../components/TypesListe.vue'
  import Navbar from '@/components/Navbar.vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const goToDetail = (name) => {
    router.push(`/type/${name}`)
  }
</script>

<template>
  <Navbar />
  <TypesListe @select-type="goToDetail"/>
</template>
