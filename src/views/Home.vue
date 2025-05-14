<script setup>


</script>

<template>
    <div class="page">
      <h1>POKEDEX</h1>
      <router-link to="/pokedex">
          <img class="pokedex" src="@/assets/pokedex.png" alt="POKEDEX" />
      </router-link>
      <div class="menu">
        <router-link to="/types">
          <h1 class="choix">TYPES</h1>
        </router-link>
        <router-link to="/abilities">
          <h1 class="choix">ABILITIES</h1>
        </router-link>
        <router-link to="/moves">
          <h1 class="choix">MOVES</h1>
        </router-link>
      </div>
    </div>

</template>

<style scoped>

  a {
    margin-left: 40px;
    margin-right: 40px;
  }

  .choix {
    border-style: solid;
    padding: 5px;
    background-color: white;
    border-color: rgb(243, 87, 87);
  }

  h1 {
    text-align: center;
    color: black;
  }

  .page {
    display: flex;
    flex-direction: column;
    gap: 100px;
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
