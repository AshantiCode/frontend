<template>
  <v-container>
    <v-row class="mt-12 text-center ">
      <v-col cols="12" class="py-0 ">
        <h2 class="primary--text pretitle">AWESOME</h2>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <h1 cols="12" class="custom-title">
          <span class="party">PARTY</span>
          <span class="wall">WALL</span>
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="8" offset-lg="2" class="py-0 px-6">
        <h2 class="subtitle">
          No hustle, just enjoy. Let us do take care about food and drinks and you care about your guests. Explore food and drinks
          or sell your awesome stuff.
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div style="width: 450px;">
          <v-img :src="require('@/assets/frau-happy.png')" class="woman"></v-img>
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
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-btn color="accent" class="py-6 px-8 mt-12" to="/register">
          Explore Now
          <v-icon class="ml-3">mdi-party-popper</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.custom-title {
  font-size: 3rem;
  color: #38726c;
}
.party {
  font-weight: 300;
}

.dog {
  position: absolute;
  bottom: 669px;
  left: 1120px;
}
.subtitle {
  margin: 0 auto;
  color: #9c9407;
  /* padding: 0 40px; */
  text-align: center;
}
.position {
  position: absolute;
  bottom: 0;
}
.woman {
  left: 100px;
  position: absolute;
  bottom: -10;
}
.man {
  left: 1200px;
}
.me {
  right: 350px;
}

@media (max-width: 1150px) {
  .me {
    display: none;
  }
}
@media (max-width: 1600px) {
  .man {
    display: none;
  }
}
@media (max-width: 1700px) {
  .dog {
    display: none;
  }
}
@media (min-width: 670px) {
  .woman {
    bottom: 0;
  }
  .custom-title {
    font-size: 6rem;
  }
}
@media (min-width: 700px) {
}
</style>
