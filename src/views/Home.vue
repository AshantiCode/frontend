<template>
  <v-container>
    <div style="max-width: 1000px;" class="mx-auto">
      <h1
        class="display-3 my-12 text-center font-weight-bold secondary--text"
      >Make your next Party awesome!</h1>
      <v-row>
        <v-col v-for="(item, i) in items" :key="i">
          <ListItem :item="item" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import ListItem from "../components/ListItem";

export default {
  components: {
    ListItem
  },
  computed: {
    items() {
      return this.$store.getters.loadedItems;
    }
  }
};
</script>

<style>
.v-expansion-panel-content__wrap {
  padding: 0;
}
</style>
