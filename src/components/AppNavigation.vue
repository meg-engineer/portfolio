<template>
  <FadeIn>
    <div class="navigation-bar">
      <v-btn text large style="text-transform: none" @click="$vuetify.goTo(0)"
        >Home</v-btn
      >
      <v-btn
        text
        large
        style="text-transform: none"
        @click="$vuetify.goTo('#about', options)"
        >About</v-btn
      >
      <v-btn
        text
        large
        style="text-transform: none"
        @click="$vuetify.goTo('#portfolio', options)"
        >Portfolio</v-btn
      >
      <v-btn
        text
        large
        style="text-transform: none"
        @click="$vuetify.goTo('#skill', options)"
        >Skill</v-btn
      >
      <v-btn
        text
        large
        style="text-transform: none"
        @click="$vuetify.goTo('#contact', options)"
        >Contact</v-btn
      >
    </div>
  </FadeIn>
</template>

<script>
import FadeIn from "@/components/FadeIn";

export default {
  name: "AppNavigation",
  components: {
    FadeIn
  }
};
</script>

<style scoped>
.navigation-bar {
  background: rgba(250, 250, 250, 0.5);
  text-align: center;
  padding: 15px 0;
}
v-btn {
  color: black;
  text-decoration: none;
  margin: 10px;
  text-transform: none;
}

v-btn:hover {
  color: pink;
}
</style>
