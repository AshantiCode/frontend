<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1 class="heading secondary--text">Drinks</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10" offset="1" sm="6" offset-sm="3" md="4" offset-md="4">
        <v-form @submit.prevent="onAddDrink">
          <v-row>
            <v-col>
              <v-text-field
                v-model="name"
                name="name"
                id="name"
                label="What are you selling?"
                :counter="20"
                filled
                required
                loading="true"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <h4 class="font-weight-regular">
                How much volume does one
                <span class="accent--text">{{ name }}</span> have?
              </h4>
              <v-slider v-model="volume" class="align-center" max="100" min="1" hide-details>
                <template v-slot:append>
                  <v-text-field
                    v-model="volume"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 45px"
                  ></v-text-field>oz
                </template>
              </v-slider>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p>How many servings does one order include?</p>
              <v-slider v-model="quantity" class="align-center" max="15" min="1" hide-details>
                <template v-slot:append>
                  <v-text-field
                    v-model="quantity"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 45px"
                  ></v-text-field>
                </template>
              </v-slider>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p>How much does one order cost?</p>
              <v-slider v-model="price" class="align-center" max="100" min="1" hide-details>
                <template v-slot:append>
                  <v-text-field
                    v-model="price"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 45px"
                  ></v-text-field>€
                </template>
              </v-slider>
            </v-col>
          </v-row>
          <v-row class="text-right mt-10">
            <v-col>
              <v-btn type="submit" :disabled="!formIsValid" color="accent">Add to Listing</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Axios } from "../../Axios";
import { store } from "../store";

export default {
  data() {
    return {
      name: "",
      volume: "",
      quantity: "",
      price: "",
      creatorId: ""
    };
  },
  computed: {
    formIsValid() {
      return (
        this.name !== "" &&
        this.volume !== "" &&
        this.quantity !== "" &&
        this.price !== ""
      );
    }
  },
  methods: {
    async onAddDrink() {
      const creatorId = store.getters.user.id;
      const newDrinksData = {
        name: this.name,
        category: "drinks",
        volume: this.volume,
        quantity: this.quantity,
        price: this.price,
        creatorId: creatorId
      };
      const response = await Axios.post("/items/", newDrinksData);

      this.$store.dispatch("setUser", response.data);
      this.$router.push({ name: "home" });
    }
  }
};
</script>
