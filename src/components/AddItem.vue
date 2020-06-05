<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1 class="heading secondary--text">Add a new item</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3" md="4" offset-md="4">
        <v-form ref="form">
          <v-row>
            <v-col>
              <v-radio-group>
                <v-select
                  v-model="selectedCategory"
                  :items="items"
                  item-text="category"
                  label="Select a category..."
                  outlined
                  return-object
                ></v-select>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row class="text-center">
            <v-col>
              <v-btn color="accent py-5 px-8" :disabled="hasInput()" @click="redirectTo(selectedCategory)">
                Next
                <v-icon right>mdi-arrow-right</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { value: "food", category: "Food" },
        { value: "drink", category: "Drink" },
      ],
      selectedCategory: null,
    };
  },
  methods: {
    hasInput() {
      return !this.selectedCategory;
    },
    redirectTo() {
      this.$router.push({ name: `add-${this.selectedCategory.value}` });
    },
  },
};
</script>

<style scoped>
.heading {
  font-size: 3rem;
}</style
>>
