<template>
  <div class="skill" id="skill">
    <FadeIn>
      <h1>Skill</h1>
    </FadeIn>
    <p>JavaScriptのフレームワークを中心に勉強中です。</p>
    <!-- <v-container>
      <v-row>
        <v-col cols="2.4">
          <v-icon x-large>fab fa-html5</v-icon>HTML5
        </v-col>
        <v-col cols="2.4">
          <v-icon x-large>fab fa-css3-alt</v-icon>CSS
        </v-col>
        <v-col cols="2.4">
          <v-icon large>fab fa-js-square</v-icon>Javascript
        </v-col>
        <v-col cols="2.4">
          <v-icon large>fab fa-vuejs</v-icon>Vue.js
        </v-col>
        <v-col cols="2.4">
          <v-icon large>fab fa-vuejs</v-icon>Vuex
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2.4">
          <v-icon large>fab fa-adobe</v-icon>AdobeXD
        </v-col>
        <v-col cols="2.4">
          <v-icon large>fab fa-adobe</v-icon>Adobe Photoshop
        </v-col>
        <v-col cols="2.4">
          <v-icon large>fab fa-adobe</v-icon>Adobe Illustrator
        </v-col>
      </v-row>
    </v-container>-->
    <FadeIn>
      <div class="flexbox">
        <div class="item"><v-icon x-large>fab fa-html5</v-icon>HTML5</div>
        <div class="item"><v-icon x-large>fab fa-css3-alt</v-icon>CSS</div>
        <div class="item">
          <v-icon large>fab fa-js-square</v-icon>Javascript
        </div>
        <div class="item"><v-icon large>fab fa-vuejs</v-icon>Vue.js</div>
        <div class="item"><v-icon large>fab fa-vuejs</v-icon>Vuex</div>
        <div class="item"><v-icon large>fab fa-adobe</v-icon>AdobeXD</div>
        <div class="item">
          <v-icon large>fab fa-adobe</v-icon>Adobe Photoshop
        </div>
        <div class="item">
          <v-icon large>fab fa-adobe</v-icon>Adobe Illustrator
        </div>
      </div>
    </FadeIn>
  </div>
</template>
<script>
import FadeIn from "../components/FadeIn";

export default {
  name: "skill",
  components: {
    FadeIn
  }
};
</script>
<style scoped>
#skill {
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
}

#skill h1 {
  font-size: 2em;
  margin-bottom: 60px;
  text-align: center;
}

#skill p {
  text-align: center;
}

/* Responsive */
@media (min-width: 600px) {
  .flexbox {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto 65px;
  }
  .item {
    width: 20%;
    margin-top: 30px;
  }
}

@media screen and (max-width: 480px) {
  .flexbox {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto 65px;
  }
  .item {
    width: 50%;
    margin-top: 30px;
  }
}
</style>
