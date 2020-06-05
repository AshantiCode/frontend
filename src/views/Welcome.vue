<template>
  <div class="text-center py-12" style="margin-top:100px">
    <h1 class="display-4">
      <span class="primary--text uppercase">PARTY</span><span class="primary--text font-weight-bold">WALL</span>
    </h1>
    <h2 class="subtitle">
      No hustle, just enjoy. Let us do take care about food and drinks and you care about your guests. Explore food and drinks or
      sell your awesome stuff.
    </h2>
    <div style="width: 450px;">
      <v-img :src="require('@/assets/frau-happy.png')" class="position woman"></v-img>
    </div>
    <div style="width: 450px;">
      <v-img :src="require('@/assets/mann-happy.png')" class="position man"></v-img>
    </div>
    <div>
      <v-img style="height: 250px;" :src="require('@/assets/happy-dog.png')" class="dog"></v-img>
    </div>

    <div style="width: 450px;">
      <v-img :src="require('@/assets/happy-me.png')" class="position me"></v-img>
    </div>
    <v-btn color="accent" class="py-6 px-8 mt-12" to="/login">Explore Now <v-icon class="ml-3">mdi-party-popper</v-icon></v-btn>
  </div>
</template>

<style scoped>
.dog {
  position: absolute;
  bottom: 650px;
  left: 1120px;
}
.subtitle {
  max-width: 50%;
  margin: 0 auto;
  color: #9c9407;
}
.position {
  position: absolute;
  bottom: 0;
}
.woman {
  left: 100px;
}
.man {
  left: 1200px;
  /* right: 400px; */
}
.me {
  right: 350px;
}
</style>
