<script setup>
  import { browser } from 'globals';
import {ref, onMounted, computed} from 'vue'

  const moves = ref([])
  const input = ref("");

  onMounted(async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/move?limit=937`)
    const data = await res.json()
    moves.value = data.results
  })

  const filteredMoves = computed(() =>
    moves.value.filter(move =>
      move.name.toLowerCase().includes(input.value.toLowerCase())
    )
  )
</script>

<template>
  <img src="@/assets/logo.png" alt="sprite" />

  <div>
    <RouterLink class="menu" to="/"> RETURN TO MENU </RouterLink>
  </div>

  <div>
    <input class="input" type="text" v-model="input" placeholder="Search moves..." />
  </div>

  <br>
    <h2>MOVES</h2>
  <br>

  <div class="grid">
    <li
      v-for="move in filteredMoves"
      :key="move.name"
      @click="$emit('select-move',move.name)"
      style="cursor: pointer"
    >

      <p class="nomtruc" >{{ move.name }}</p>

    </li>
  </div>
</template>

<style scoped>

.input{
  width: 30%;
  margin-top: 10px;
  margin-left: 20px;
}

h2 {
  text-align: center;
  text-transform: capitalize;
  font-weight: bold;
  font-style: italic;
  font-size:xx-large;
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
grid-template-columns: repeat(6,1fr);
gap: 50px;
padding: 20px;
}

li {
  text-transform: capitalize;
  list-style-type: none;
  text-align: center;
  border: 10px;
  border-style: solid;
  border-color: rgb(98, 93, 89);
  background-color: whitesmoke;
}
</style>
