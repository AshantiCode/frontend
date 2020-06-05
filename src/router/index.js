import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import AddItem from "../components/AddItem";
import Login from "../views/Login";
import Register from "../views/Register";
import AddFood from "../components/AddFood";
import AddDrink from "../components/AddDrink";
import Welcome from "../views/Welcome.vue";
import AuthGuard from "./auth-guards";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/welcome",
      name: "welcome",
      component: Welcome,
    },
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter: AuthGuard,
    },

    {
      path: "/add-item",
      name: "add-item",
      component: AddItem,
      beforeEnter: AuthGuard,
    },
    {
      path: "/add-food",
      name: "add-food",
      component: AddFood,
      beforeEnter: AuthGuard,
    },
    {
      path: "/add-drink",
      name: "add-drink",
      component: AddDrink,
      beforeEnter: AuthGuard,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
  ],
});
