<script setup>
  import TypesDetailComponent from '@/components/TypesDetailComponent.vue';
  import { useRouter } from 'vue-router'

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
  <TypesDetailComponent :name="name" @select-pokemon="goToDetail"/>
</template>
