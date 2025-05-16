<script setup>
  import {ref, onMounted} from 'vue'

  const {name} = defineProps({
    name: String
  })

  const pokemon = ref(null)

  onMounted(async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    pokemon.value = await res.json()
  })

</script>

<template>
  <div class="photo" v-if="pokemon">
    <img id="spritepoke" class="flexitem" :src="pokemon.sprites.front_default" alt="sprite" />
    <!-- Boutton pur rendre tout le monde shiny-->
    <!-- Boutton pour afficher les sprites 3D avec other.showdown. SPRITE EN 3D EN REDUISANT LA TAILLE DES SPRITES PEUT ETRE -->
    <div class="nomtruc">{{ pokemon.name }}</div>
  </div>
  <div v-else>
    <br>
    <!--<img class="loading" src="@/assets/loading.png" alt="sprite" />-->
    Chargement...
  </div>
</template>

<style scoped>

  .photo {
    padding: 10px;
  }



</style>
