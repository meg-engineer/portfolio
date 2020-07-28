<template>
  <v-app>
    <!-- スクロールしたらTopボタン表示 -->
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      fixed
      bottom
      right
      color="gray"
      @click="toTop"
    >
      <v-icon>fas fa-angle-up</v-icon>
    </v-btn>
    <!-- Menuここまで -->
    <Home />

    <AppNavigation />

    <About />
    <portfolio />
    <Skill />
    <Contact />
    <Footer />
  </v-app>
</template>

<script>
import AppNavigation from "@/components/AppNavigation";
import Footer from "@/components/Footer";
import Home from "@/views/Home";
import About from "@/views/About";
import Portfolio from "@/views/Portfolio";
import Skill from "@/views/Skill";
import Contact from "@/views/Contact";

export default {
  name: "App",

  components: {
    AppNavigation,
    Footer,
    Home,
    About,
    Portfolio,
    Skill,
    Contact
  },
  data: () => {
    return {
      fab: false
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 500;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>
<style>
@import "assets/css/reset.css";
</style>
