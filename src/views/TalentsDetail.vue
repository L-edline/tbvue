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
    console.log('goToDetail')
  }
</script>

<template>
  <Navbar></Navbar>
  <TalentsDetailComponent :name="name" @select-pokemon="goToDetail"/>
</template>
