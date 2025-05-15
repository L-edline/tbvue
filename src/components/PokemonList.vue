<script setup>
  import {ref, onMounted, computed} from 'vue'
  import Photo from './Photo.vue'

  const pokemons = ref([])
  const input = ref("");

  onMounted(async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1302`)
    const data = await res.json()
    pokemons.value = data.results
  })

  const filteredPokemons = computed(() =>
    pokemons.value.filter(pokemon =>
      pokemon.name.toLowerCase().includes(input.value.toLowerCase())
    )
  )

</script>

<template>
  <img src="@/assets/logo.png" alt="sprite" />
  <div>
    <RouterLink class="menu" to="/"> RETURN TO MENU </RouterLink>

    <div class="grid">
      <li
        v-for="pokemon in filteredPokemons"
        :key="pokemon.name"
        @click="$emit('select-pokemon',pokemon.name)"
        style="cursor: pointer"
      >

        <Photo :name="pokemon.name"></Photo>

      </li>
    </div>

  </div>

  <input class="input" type="text" v-model="input" placeholder="Search pokemons..." />


</template>

<style scoped>

.input{
  width: 30%;
  margin-top: 10px;
  margin-left: 20px;
}

div {
  text-align: center;
}

.menu {
  color: black;
  background-color: rgb(253, 125, 125);
  border-style: solid;
  width: fit-content;
}

img {
  width: 40%;
  margin: auto;
  margin-top: 15px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 16px;
  padding: 20px;
}

li {
  text-transform: capitalize;
  list-style-type: none;
  text-align: center;
  border: 10px;
  border-style: solid;
  border-color: rgb(240, 90, 90);
  background-color: whitesmoke;
}
</style>
<!--Faire un nouveau composant-->
