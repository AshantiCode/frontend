import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#38726C",
        secondary: "#9C9407",
        accent: "#D34E24",
        text: "#3E2E14",
      },
    },
  },
});
