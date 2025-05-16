<script setup>
  import {ref, onMounted} from 'vue'
  import Photo from './Photo.vue'

  const {name} = defineProps({
    name: String,
  })

  const line = ref(null)

  onMounted(async () => {
    const res = await fetch(name)
    line.value = await res.json()
  })


</script>

<template>
  <div class="linebox" v-if="line">

    <!--<div class="item">{{ line.chain.species.name }}</div>
    <div class="item" v-if="line.chain.evolves_to.length != 0">{{ line.chain.evolves_to[0].species.name }}</div>
    <div class="item" v-if="line.chain.evolves_to.length != 0  && line.chain.evolves_to[0].evolves_to.length != 0">{{ line.chain.evolves_to[0].evolves_to[0].species.name }}</div>-->

    <div class="item">
      <Photo :name="line.chain.species.name"></Photo>
    </div>

    <div class="item" v-if="line.chain.evolves_to.length != 0">
      <Photo :name="line.chain.evolves_to[0].species.name"></Photo>
    </div>

    <div class="item" v-if="line.chain.evolves_to.length != 0  && line.chain.evolves_to[0].evolves_to.length != 0">
      <Photo :name="line.chain.evolves_to[0].evolves_to[0].species.name"></Photo>
    </div>

  </div>
  <div v-else>
    <br>
    <!--<img class="loading" src="@/assets/loading.png" alt="sprite" />-->
    Chargement...
  </div>
</template>

<style scoped>

  .linebox {
    display: flex;
    justify-content:center;
  }

  .item {
    margin-left: 5px;
    margin-right: 5px;
    border-style: solid;
    border-radius: 10px;
    text-transform: capitalize;
    background-color: rgb(247, 198, 139);
  }

</style>
