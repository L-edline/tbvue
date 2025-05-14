<script setup>
</script>

<template>
  <div class="content">
    <router-link to="/pokedex">
      <h1>POKEMONS</h1>
    </router-link>

    <router-link to="/types">
      <h1>TYPES</h1>
    </router-link>

    <router-link to="/abilities">
      <h1>ABILITIES</h1>
    </router-link>

    <router-link to="/moves">
      <h1>MOVES</h1>
    </router-link>
  </div>
</template>

<style scoped>

  .content {
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    background-color: rgb(177, 169, 169);
  }

  h1 {
    color: black;
    font-weight:500;
    border-style: solid;
    padding: 5px ;
    background-color: rgb(214, 203, 203);
  }

</style>
