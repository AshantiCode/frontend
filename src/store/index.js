import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import { Axios } from "../../Axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
    error: null,
    loadedItems: [],
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setLoadedItems(state, payload) {
      state.loadedItems = payload;
    },
    setItems(state, payload) {
      state.items = payload;
    },
    addDrink(state, payload) {
      state.loadedItems.unshift(payload);
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
    async loadItems({ commit }) {
      try {
        const response = await Axios.get("/items");

        const items = [];
        const obj = response.data;
        for (let key in obj) {
          items.push({
            id: obj[key],
            category: obj[key].category,
            name: obj[key].name,
            description: obj[key].description,
            price: obj[key].price,
            quantity: obj[key].quantity,
            userId: obj[key].userId,
            weight: obj[key].weight,
            volume: obj[key].volume,
          });
          commit("setLoadedItems", items);
        }
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
    addDrink({ commit }, payload) {
      console.log("payload in addNewDrink action: ", payload);
      console.log("commit in addNewDrink action: ", commit);
      const drink = {
        name: payload.name,
        category: payload.category,
        creatorId: payload.creatorId,
        price: payload.price,
        quantity: payload.quantity,
        volume: payload.volume,
      };
      commit("addDrink", drink);
    },
  },
  clearError({ commit }) {
    commit("clearError");
  },
  getters: {
    loadedItems(state) {
      console.log("state: l102 ", state.loadedItems);
      return state.loadedItems;
    },
    loadedItem(state) {
      return (itemId) => {
        return state.loadedItems.find((item) => {
          return item.id === itemId;
        });
      };
    },
    user(state) {
      return state.user;
    },
    error(state) {
      return state.error;
    },
  },
});
