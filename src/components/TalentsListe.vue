<script setup>
  import {ref, onMounted} from 'vue'

  const abilities = ref([])

  onMounted(async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/ability?limit=367`)
    const data = await res.json()
    abilities.value = data.results
  })
</script>

<template>
  <img src="@/assets/logo.png" alt="sprite" />

  <div>
    <RouterLink class="menu" to="/"> RETURN TO MENU </RouterLink>
  </div>

  <br>
    <h2>ABILITIES</h2>
  <br>

  <div class="grid">
    <li
      v-for="ability in abilities"
      :key="ability.name"
      @click="$emit('select-ability',ability.name)"
      style="cursor: pointer"
    >

      <p class="nomtruc">{{ ability.name }}</p>

    </li>
  </div>
</template>

<style scoped>

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
  background-color: rgb(173, 171, 170);
}
</style>
