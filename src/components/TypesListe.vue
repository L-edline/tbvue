<script setup>
  import {ref, onMounted} from 'vue'

  const types = ref([])

  onMounted(async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/type?limit=18`)
    const data = await res.json()
    types.value = data.results
  })
</script>

<template>

  <img src="@/assets/logo.png" alt="sprite" />

  <div>
    <RouterLink class="menu" to="/"> RETURN TO MENU </RouterLink>
  </div>

  <br>
    <h2>TYPES</h2>
  <br>

  <div class="grid">
    <li
      v-for="type in types"
      :key="type.name"
      @click="$emit('select-type',type.name)"
      style="cursor: pointer"
    >
      <img class="icon" :src="'/src/assets/types/'+ type.name + '.png'" :alt="type.name" />
    </li>
  </div>
</template>

<style scoped>

.icon {
  width: 60%;
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
}
.grid {
display: grid;
grid-template-columns: repeat(6, 1fr);
gap: 40px;
padding: 30px;
margin-bottom: 790px;
margin-top: 100px;
}

li {
  list-style-type: none;
  width: 100%;
}

</style>
