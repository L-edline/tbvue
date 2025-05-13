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
  <div class="grid">
    <li
      v-for="type in types"
      :key="type.name"
      @click="$emit('select-type',type.name)"
      style="cursor: pointer"
    >
      <img :src="'/src/assets/types/'+ type.name + '.png'" :alt="type.name" />
    </li>
  </div>
</template>

<style scoped>

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
gap: 16px;
padding: 20px;
}

li {
  list-style-type: none;
}

</style>
