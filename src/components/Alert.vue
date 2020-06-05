<template>
  <v-alert class="mt-3" dense dark dismissible="" icon="mdi-alert-circle-outline" color="accent" border="left" @input="onClose">
    {{ text }}
  </v-alert>
</template>

<script>
export default {
  props: ["text"],
  methods: {
    onClose() {
      this.$emit("dismissed");
    },
  },
};
</script>
