<script setup>
  import MovesDetailComponent from '@/components/MovesDetailComponent.vue'
  import { useRouter } from 'vue-router'

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
  <MovesDetailComponent :name="name" @select-pokemon="goToDetail" @select-type="goToDetailType"/>
</template>
