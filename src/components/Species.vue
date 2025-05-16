<script setup>
  import { ref, onMounted, computed } from 'vue'
  import EvolutionLine from './EvolutionLine.vue'

  const {name, pokemonname} = defineProps({
    name: String,
    pokemonname: String
  })

  const species = ref(null)

  onMounted(async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
    species.value = await res.json()
  })


  const lastEnglishFlavorText = computed(() => {
    if (!species.value || !species.value.flavor_text_entries) return null

    const englishEntries = species.value.flavor_text_entries.filter(
      entry => entry.language.name === 'en'
    )

    return englishEntries[englishEntries.length - 1] || null
  })

</script>

<template>
  <div class="main" v-if="species">

    <div class="flextag" v-if="species.is_legendary === true">
      <p class="specialtag">LEGENDARY POKEMON</p>
    </div>

    <div class="flextag" v-if="species.is_mythical === true">
      <p class="specialtag">MYTHICAL POKEMON</p>
    </div>

    <h3 class="libelle">Description</h3>
    <p id="description">{{ lastEnglishFlavorText.flavor_text }}</p>

    <h3 class="libelle">Evolution Line</h3>
    <EvolutionLine :name="species.evolution_chain.url"></EvolutionLine>

  </div>
  <div v-else>
    <br>
    <!--<img class="loading" src="@/assets/loading.png" alt="sprite" />-->
    Chargement...
  </div>
</template>

<style scoped>

  .flextag {
    display: flex;
    justify-content: center;
  }

  .specialtag {
    border-style: solid;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 4px;
    margin-bottom: 10px;
    background-color: yellow;
    font-family: 'Press Start 2P';
    border-radius: 15px;
    border-color: red;
    color: black;
  }

  .main {
    margin-top: 1%;
    margin-bottom: 5%;
  }

  h3 {
    font-weight: bold;
  }

  #description {
    margin-bottom: 15px;
  }

</style>
