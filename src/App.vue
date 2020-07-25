<template>
  <v-app>
    <AppNavigation />
    <Home />
    <About />
    <portfolio />
    <Skill />
    <Contact />
    <Footer />
  </v-app>
</template>

<script>
import AppNavigation from "./components/AppNavigation";
import Footer from "./components/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Portfolio from "./views/Portfolio";
import Skill from "./views/Skill";
import Contact from "./views/Contact";

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

  data: () => ({
    //
  })
};
</script>
<style>
@import "assets/css/reset.css";
</style>
