LOGIN

<template>
  <div>
    <div class="col-md-12 form-wrapper">
      <h2> Inscription</h2>
      <form id="create-post-form" @submit.prevent="createCustomer">
        <div class="form-group col-md-12">
          <label for="first_name">Nom</label>
          <input type="text" id="first_name" v-model="firstname" name="title" class="form-control" placeholder="Nom">
        </div>
        <div class="form-group col-md-12">
          <label for="last_name">Prenom</label>
          <input type="text" id="last_name" v-model="lastname" name="title" class="form-control" placeholder="Prénom">
        </div>
        <div class="form-group col-md-12">
          <label for="email">Email</label>
          <input type="text" id="email" v-model="email" name="title" class="form-control" placeholder="Email">
        </div>
        <div class="form-group col-md-12">
          <label for="password">Email</label>
          <input type="password" id="password" v-model="password" name="title" class="form-control" placeholder="Mot de passe">
        </div>
        <div class="form-group col-md-4 pull-right">
            <button class="btn btn-success" type="submit">S'enregistrer</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { server } from "../../utils/helper";
import router from "../../router";
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    };
  },
  methods: {
    createCustomer() {
      let customerData = {
        firstname: this.first_name,
        lastname: this.last_name,
        email: this.email,
        password: this.phone,
      };
      this.__submitToServer(customerData);
    },
    __submitToServer(data) {
      axios.post(`${server.baseURL}/customer/create`, data).then(data => {
        router.push({ name: "home" });
      });
    }
  }
};
</script>