<script setup>
import Test from '../components/Test.vue'
import {ref, onMounted} from 'vue'

const testvar = ref('')


function fonctionbtn(name){
  testvar.value = name
}

onMounted(() =>{
  alert('La page est chargée')
})
</script>

<template>
  <main>
    <Test :bateau="testvar" @evenementbtn="fonctionbtn" ></Test>
    <input type="text" v-model="testvar">
    <p>{{ testvar }}</p>
  </main>
</template>
