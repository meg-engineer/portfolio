<template>
  <div class="navigation-bar">
    <v-btn text x-large style="text-transform: none" @click="$vuetify.goTo(0)"
      >Home</v-btn
    >
    <v-btn
      text
      x-large
      style="text-transform: none"
      @click="$vuetify.goTo('#about', options)"
      >About</v-btn
    >
    <v-btn
      text
      x-large
      style="text-transform: none"
      @click="$vuetify.goTo('#portfolio', options)"
      >Portfolio</v-btn
    >
    <v-btn
      text
      x-large
      style="text-transform: none"
      @click="$vuetify.goTo('#skill', options)"
      >Skill</v-btn
    >
    <v-btn
      text
      x-large
      style="text-transform: none"
      @click="$vuetify.goTo('#contact', options)"
      >Contact</v-btn
    >
  </div>
</template>

<script>
export default {
  name: "AppNavigation"
};
</script>

<style scoped>
.navigation-bar {
  background: rgba(250, 250, 250, 0.5);
  text-align: center;
  margin-top: 15px;
  padding-bottom: 50px;
}
v-btn {
  color: black;
  text-decoration: none;
  margin: 50px;
  text-transform: none;
}

v-btn:hover {
  color: pink;
}
</style>
