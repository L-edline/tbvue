<script setup>
  import { ref } from 'vue'
  import TypesDetailComponent from '@/components/TypesDetailComponent.vue';
  import { useRouter, useRoute } from 'vue-router'
  import Navbar from '@/components/Navbar.vue'

  const router = useRouter()
  const route = useRoute();

  const props = defineProps({
    name: String
  })

  const name = route.params.name;

  const nameref = ref(name)

  const goToDetail = (name) => {
    router.push(`/pokemon/${name}`)
  }

  const goToDetailMove = (name) => {
    router.push(`/move/${name}`)
  }

  const goToDetailType = (name) => {
    router.push(`/type/${name}`)
    nameref.value = name
  }
</script>

<template>
  <Navbar />
  <TypesDetailComponent :key="name" :name="nameref" @select-pokemon="goToDetail" @select-move="goToDetailMove" @select-type="goToDetailType"/>
</template>
