<template>
  <v-container>
    <v-row class="mt-10">
      <v-col cols="12" sm="6" offset-sm="3" md="4" offset-md="4">
        <v-card>
          <v-card-title>
            <h1 class="display-1 secondary--text">Login</h1>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form name="form" @submit.prevent="onLogin">
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      name="email"
                      label="Email"
                      id="email"
                      v-model="email"
                      type="email"
                      :rules="emailRules"
                      prepend-icon="mdi-email"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      :rules="passwordRules"
                      prepend-icon="mdi-lock"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassword ? 'text' : 'password'"
                      @click:append="showPassword = !showPassword"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-btn type="submit" :disabled="!formIsValid" color="accent">Login</v-btn>
                    <app-alert v-if="error" @dismissed="onDismissed" :text="error.message"></app-alert>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      email: "",
      password: "",
      emailRules: [(v) => !!v || "E-mail is required", (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"],
      passwordRules: [(v) => (v && v.length > 6) || "Name must have at least 6 characters"],
    };
  },
  computed: {
    formIsValid() {
      return this.email.includes("@") && this.password.length >= 6;
    },
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    user(value) {
      if ((value !== null) & (value !== undefined)) {
        this.$router.push({ name: "home" });
      }
    },
  },
  methods: {
    onLogin() {
      if (!this.formIsValid) {
        return;
      }
      const newUser = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("loginUser", newUser);
    },
    onDismissed() {
      this.$store.dispatch("clearError");
    },
  },
};
</script>
