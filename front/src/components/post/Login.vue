<template>
  <div>
    <div class="col-md-12 form-wrapper">
      <h2>Connexion</h2>
      <form id="create-post-form" @submit.prevent="submit">
        <div class="form-group col-md-12">
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            v-model="email"
            name="title"
            class="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div class="form-group col-md-12">
          <label for="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            v-model="password"
            name="title"
            class="form-control"
            placeholder="Mot de passe"
            required
          />
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Se connecter</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import router from "../../router";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submit() {
      router.push({ name: "homeacceuil" });
      this.$router.go(0);
    },
  },
};
</script>
