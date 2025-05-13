<script setup>

</script>

<template>
    <div class="page">
      <h1>ENCYCLOPEDIE</h1>
      <div class="menu">
        <router-link to="/pokedex">
          <img class="pokedex" src="@/assets/pokedex.png" alt="POKEDEX" />
        </router-link>
        <router-link to="/types">
          <img class="types" src="@/assets/rouetypes.jpg" alt="TYPES" />
        </router-link>
      </div>
    </div>

</template>

<style scoped>

  h1 {
    text-align: center;
  }

  .page {
    display: flex;
    flex-direction: column;
    gap: 400px;
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
