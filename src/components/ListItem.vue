<template>
  <v-card max-width="300px" class="mx-auto">
    <v-container class="pt-0">
      <v-row>
        <v-hover v-slot:default="{ hover }">
          <v-col class="pa-0" style="position: relative">
            <v-img v-if="drinks" max-height="200px" :src="require('@/assets/drinks.jpg')"></v-img>

            <div style="position:relative;">
              <v-fade-transition v-if="!drinks">
                <v-overlay v-if="hover" absolute class="pa-2" opacity="0.8" value="overlay">
                  <v-card flat style="background: transparent;" class="pa-2">
                    <v-card-text class="subtitle-1 font-weight-bold">
                      {{
                      item.description
                      }}
                    </v-card-text>
                  </v-card>
                </v-overlay>
              </v-fade-transition>
              <v-img v-if="!drinks" max-height="200px" :src="require('@/assets/food.jpg')"></v-img>
            </div>
          </v-col>
        </v-hover>

        <v-col cols="12">
          <v-card-title class="list-item-heading regular pl-0 accent--text">
            {{ item.name }}
            <v-btn
              absolute
              right
              fab
              small
              color="accent"
              v-if="userIsCreator"
              style="transform: translateY(-44px)"
              @click="onDeleteItem(item.id)"
            >
              <v-icon>mdi-delete-forever</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text class="font-weight-bold headline pa-0">{{ item.price }} €</v-card-text>
        </v-col>

        <v-row>
          <v-col class="py-0">
            <v-card-subtitle v-if="drinks" class="py-0 text--disabled">Vol.: {{ item.volume }} liter</v-card-subtitle>
            <v-card-subtitle
              v-if="!drinks"
              class="py-0 text--disabled"
            >Weight: {{ item.weight }} lbs.</v-card-subtitle>
          </v-col>

          <v-col class="py-0">
            <v-card-subtitle class="pa-0 text--disabled">Max. Order: {{ item.quantity }}</v-card-subtitle>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-card-text class="text--disabled">Order Amount:</v-card-text>
          </v-col>

          <v-col cols="6">
            <v-select
              class="text--secondary orders"
              dense
              v-model="selectedAmount"
              :items="maxItemsArray"
            ></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-card-text class="title pt-0">Total: {{ totalPrice }} €</v-card-text>
          </v-col>

          <v-col>
            <v-btn small class="primary">Order now</v-btn>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { Axios } from "../../Axios";

export default {
  name: "ListItem",
  props: ["item"],
  data() {
    return {
      selectedAmount: 0,
      totalPrice: 0
    };
  },
  methods: {
    onDeleteItem(itemId) {
      const deleteUrl = `/items/${itemId}`;

      Axios.delete(deleteUrl).then(response => {
        console.log("response data: ", response);
        location.reload();
      });
    }
  },
  computed: {
    maxItemsArray() {
      const quantity = this.item.quantity;
      let array = [];
      for (let i = 0; i <= quantity; i++) {
        array.push(i);
      }
      return array;
    },
    drinks() {
      return this.item.category == "drinks";
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
    createdItem() {
      return this.item.creatorId;
    },
    userIsCreator() {
      const createdItem = this.item.creatorId;

      if (!this.userIsAuthenticated) {
        return false;
      }
      return this.$store.getters.user.id == createdItem;
    }
  },
  watch: {
    selectedAmount(value) {
      return (this.totalPrice = this.item.price * value);
    }
  }
};
</script>

<style>
.orders {
  width: 90px;
}
</style>
