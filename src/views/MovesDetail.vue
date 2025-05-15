<script setup>
  import MovesDetailComponent from '@/components/MovesDetailComponent.vue'
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

  const goToDetailType = (name) => {
    router.push(`/type/${name}`)
  }
</script>

<template>
  <Navbar />
  <MovesDetailComponent :name="name" @select-pokemon="goToDetail" @select-type="goToDetailType"/>
</template>
