<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1 class="heading secondary--text">Food</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10" offset="1" sm="6" offset-sm="3" md="4" offset-md="4">
        <v-form @submit.prevent="onAddFood">
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
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-textarea
                v-model="description"
                name="description"
                id="description"
                label="Describe your food"
                :counter="80"
                filled
                auto-grow
                required
                value
                clearable
                clear-icon="mdi-close-circle-outline"
              ></v-textarea>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <h4 class="font-weight-regular">
                How much does
                <span class="accent--text">{{ name }}</span> weigh?
              </h4>
              <v-slider v-model="weight" class="align-center" max="10" min="1" hide-details>
                <template v-slot:append>
                  <v-text-field
                    v-model="weight"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 40px"
                  ></v-text-field>lbs.
                </template>
              </v-slider>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h4 class="font-weight-regular">What is the maximun amount you can deliver?</h4>
              <v-slider v-model="quantity" class="align-center" max="100" min="1" hide-details>
                <template v-slot:append>
                  <v-text-field
                    v-model="quantity"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 40px"
                  ></v-text-field>
                </template>
              </v-slider>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h4 class="font-weight-regular">
                How much does one
                <span class="accent--text">{{ name }}</span> cost?
              </h4>
              <v-slider v-model="price" class="align-center" max="100" min="1" hide-details>
                <template v-slot:append>
                  <v-text-field
                    v-model="price"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 40px"
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
      description: "",
      weight: "",
      quantity: "",
      price: "",
      creatorId: ""
    };
  },
  computed: {
    formIsValid() {
      return (
        this.name !== "" &&
        this.description !== "" &&
        this.weight !== "" &&
        this.quantity !== "" &&
        this.price !== ""
      );
    }
  },
  methods: {
    async onAddFood() {
      const creatorId = store.getters.user.id;
      const newFoodData = {
        name: this.name,
        category: "food",
        description: this.description,
        weight: this.weight,
        quantity: this.quantity,
        price: this.price,
        creatorId: creatorId
      };

      const response = await Axios.post("/items/", newFoodData);

      this.$store.dispatch("setUser", response.data);
      this.$router.push({ name: "home" });
    }
  }
};
</script>
