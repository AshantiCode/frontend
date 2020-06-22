<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Hey fellow friend!✌</v-card-title>

        <v-card-text>You can register with an made-up emailadress. Inside create an item to "sell" your food and drinks on this page.</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" flat="flat" @click="dialog = false">Got It!</v-btn>>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: "WelcomeModal",
  data() {
    return {
      dialog: false
    };
  }
};
</script>