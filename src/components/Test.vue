<script setup>
  import {defineEmits} from 'vue'
  const props = defineProps(['bateau'])
  const emit = defineEmits(['evenementbtn'])
  function onclickbtn() {
    emit('evenementbtn','World')
  }
</script>

<template>
  <h1>Hello {{ props.bateau }}</h1>
  <button id="btn1" @click="onclickbtn">Clique</button>
</template>
