<script setup>
  import TalentsDetailComponent from '../components/TalentsDetailComponent.vue'
  import { useRouter } from 'vue-router'
  import Navbar from '@/components/Navbar.vue'

  const router = useRouter()
  const props = defineProps({
    name: String
  })

  const name = props.name

  const goToDetail = (name) => {
    router.push(`/pokemon/${name}`)
  }
</script>

<template>
  <Navbar />
  <TalentsDetailComponent :name="name" @select-pokemon="goToDetail"/>
</template>
