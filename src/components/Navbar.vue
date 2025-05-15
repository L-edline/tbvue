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
    background-color: rgb(252, 153, 153);
    padding: 10px;
  }

  h1 {
    color: black;
    border-style: solid;
    border-radius: 10px;
    padding: 5px ;
    background-color: white;
    border-color: rgb(243, 87, 87);
  }

</style>
