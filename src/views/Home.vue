<script setup>

</script>

<template>
    <div class="page">
      <h1>ENCYCLOPEDIE</h1>
      <router-link to="/pokedex">
          <img class="pokedex" src="@/assets/pokedex.png" alt="POKEDEX" />
      </router-link>
      <div class="menu">
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
    </div>

</template>

<style scoped>

  a {
    margin-left: 40px;
    margin-right: 40px;
  }

  h1 {
    text-align: center;
    color: black;
  }

  .page {
    display: flex;
    flex-direction: column;
    gap: 150px;
    text-align: center;
  }

  .menu {
    display: flex;
    flex-direction: row;
  }

  .pokedex {
    width: 50%;
  }

  .types{
    width: 30%;
  }

</style>
