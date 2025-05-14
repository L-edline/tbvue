<script setup>
  import TypesDetailComponent from '@/components/TypesDetailComponent.vue';
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

  const goToDetailMove = (name) => {
    router.push(`/move/${name}`)
  }
</script>

<template>
  <Navbar></Navbar>
  <TypesDetailComponent :name="name" @select-pokemon="goToDetail" @select-move="goToDetailMove"/>
</template>
