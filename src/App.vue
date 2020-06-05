<template>
  <v-app>
    <v-navigation-drawer app dark temporary color="primary" v-model="sideNav">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Menu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list-item-group>
        <v-list-item temporary v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="onLogout" v-if="userIsAuthenticated">
          <v-icon left>mdi-exit-to-app</v-icon>Logout
        </v-list-item>
      </v-list-item-group>
    </v-navigation-drawer>

    <v-app-bar app dark class="text-uppercase" color="primary">
      <v-app-bar-nav-icon @click="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <div class="d-flex align-center">
          <v-img :src="require('@/assets/logo.png')" alt="Party Wall Logo" width="40" class="mr-5" />
          <router-link to="/" tag="span" style="cursor:pointer;">
            <h1>
              <span class="font-weight-thin">Party</span>Wall
            </h1>
          </router-link>
        </div>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn text @click="onLogout" v-if="userIsAuthenticated">
          <v-icon left>mdi-exit-to-app</v-icon>LogOut
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      sideNav: false
    };
  },
  computed: {
    menuItems() {
      let menuItems = [
        { title: "Login", icon: "mdi-lock-open", link: "/login" },
        { title: "Register", icon: "mdi-face", link: "/register" }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          { title: "Add Item", icon: "mdi-plus", link: "/add-item" }
        ];
      }
      return menuItems;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logoutUser");
      this.$router.push({ name: "welcome" });
    }
  }
};
</script>
