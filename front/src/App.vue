<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="currentUrl == 'http://localhost:8080/home'" to="/home">Accueil | </router-link>
      <router-link v-if="currentUrl == 'http://localhost:8080/homeacceuil'" to="/create">Poster un article  | </router-link>
      <router-link to="/login">Connexion</router-link> |
      <router-link to="/register">S'enregistrer</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>

export default{
  data: function() {
      return {
        currentUrl: "",
      };
  },
  created() {
  this.currentUrl = window.location.href;
  },
}
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
