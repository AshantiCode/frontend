import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
    error: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
  actions: {
    async registerUser({ commit }, payload) {
      try {
        commit("clearError");

        const response = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password);
        const newUser = {
          id: response.user.uid,
          createdItems: [],
          savedItems: [],
        };
        commit("setUser", newUser);
      } catch (error) {
        commit("setError", error);
      }
    },
    async loginUser({ commit }, payload) {
      try {
        const response = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password);
        commit("clearError");
        const newUser = {
          id: response.user.uid,
          createdItems: [],
          savedItems: [],
        };
        commit("setUser", newUser);
      } catch (error) {
        commit("setError", error);
      }
    },
    autoLogin({ commit }, payload) {
      commit("setUser", { id: payload.uid, createdItems: [], savedItems: [] });
    },
    logoutUser({ commit }) {
      firebase.auth().signOut();
      commit("setUser", null);
    },
  },
  clearError({ commit }) {
    commit("clearError");
  },
  getters: {
    user(state) {
      return state.user;
    },
    error(state) {
      return state.error;
    },
  },
});
