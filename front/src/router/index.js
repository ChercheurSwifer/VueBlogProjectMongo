import Vue from "vue";
import Router from "vue-router";
import HomeComponent from "@/views/Home";
import EditComponent from "@/components/post/Edit";
import CreateComponent from "@/components/post/Create";
import PostComponent from "@/components/post/Post";
import RegisterComponent from "@/components/post/Register";
import LoginComponent from "@/components/post/Login";
import HomeAcceuilComponent from "@/components/post/HomeAcceuil";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", redirect: { name: "home" } },
    { path: "/home", name: "home", component: HomeComponent },
    { path: "/homeacceuil", name: "homeacceuil", component: HomeAcceuilComponent },
    { path: "/create", name: "Create", component: CreateComponent },
    { path: "/register", name: "Register", component: RegisterComponent },
    { path: "/login", name: "Login", component: LoginComponent },
    { path: "/edit/:id", name: "Edit", component: EditComponent },
    { path: "/post/:id", name: "Post", component: PostComponent },
  ],
});
