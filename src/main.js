import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase/app";

import vuetify from "./plugins/vuetify";
import router from "./router";
import { store } from "./store";
import Alert from "./components/Alert.vue";

Vue.config.productionTip = false;
Vue.component("app-alert", Alert);

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBnieFQQ7-G1roQfB6LElwRyEHNiFPbwIk",
      authDomain: "party-wall-e5824.firebaseapp.com",
      databaseURL: "https://party-wall-e5824.firebaseio.com",
      projectId: "party-wall-e5824",
      storageBucket: "party-wall-e5824.appspot.com",
      appId: "1:562412399028:web:7a5c3ee687023938182ae1",
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch("autoLogin", user);
        this.$router.push({ name: "home" });
      }
    });
  },
}).$mount("#app");
