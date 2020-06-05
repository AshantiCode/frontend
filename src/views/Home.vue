<template>
  <v-container>
    <div style="max-width: 1000px;" class="mx-auto">
      <h1
        class="display-3 my-12 text-center font-weight-bold secondary--text"
      >Make your next Party awesome!</h1>
      <v-row>
        <v-col v-for="item in items" :key="item.id">
          <ListItem :item="item" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import ListItem from "../components/ListItem";
import { Axios } from "../../Axios";

export default {
  components: {
    ListItem
  },
  data() {
    return {
      items: []
    };
  },
  async created() {
    try {
      const response = await Axios.get("/items");
      this.items = response.data.reverse();
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style>
.v-expansion-panel-content__wrap {
  padding: 0;
}
</style>
