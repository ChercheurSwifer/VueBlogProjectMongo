<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="goodUrl == 'ok'" to="/home">Accueil  </router-link>
      <router-link v-if="goodUrl == 'nok'" to="/create">  Poster un article</router-link>
      <router-link v-if="goodUrl == 'ok'" to="/login">  Connexion  </router-link>
      <router-link v-if="goodUrl == 'ok'" to="/register">  S'enregistrer  </router-link>
      <router-link v-if="goodUrl == 'nok'" @click.native="disconnect()" to="/home"> | Deconnexion </router-link>
    </div>
    <router-view />
  </div>
</template>
<script>

export default{
  data: function() {
      return {
        currentUrl: "",
        substring: 'acceuil',
        goodUrl: '',
        wrongUrl: '',
      };
  },
  created() {
    this.currentUrl = window.location.href;
    if(this.currentUrl.includes(this.substring)){
      this.goodUrl = 'nok';
    } else {
      this.goodUrl = 'ok';
    }
  },
  methods: {
    disconnect() {
        this.$router.go(0);
    },
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
