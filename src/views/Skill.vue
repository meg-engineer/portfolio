<template>
  <div class="skill" id="skill">
    <h1>Skill</h1>
    <FadeIn>
      <v-container>
        <v-row class="fill-height d-flex">
          <template>
            <v-col cols="12" md="4">
              <v-card flat class="mx-auto">
                <v-card-title class="title">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                  >
                    <p class="subheading text-left mb-8">フロントエンド</p>
                    <ul class="font-weight-light mb-6">
                      <li>
                        <v-avatar size="36"> <img :src="htmlicon" /> </v-avatar
                        >HTML5
                      </li>
                      <li>
                        <v-avatar size="36"> <img :src="cssicon" /> </v-avatar
                        >CSS
                      </li>
                      <li>
                        <v-avatar size="36"> <img :src="jsicon" /> </v-avatar
                        >JavaScript
                      </li>
                      <li>
                        <v-avatar size="36"> <img :src="tsicon" /> </v-avatar
                        >TypeScript
                      </li>
                      <li>
                        <v-avatar size="36"> <img :src="reacticon" /> </v-avatar
                        >React
                      </li>
                      <li>
                        <v-avatar size="36"> <img :src="nexticon" /> </v-avatar
                        >Next.js
                      </li>
                      <li>
                        <v-avatar size="36"> <img :src="vueicon" /> </v-avatar
                        >Vue.js
                      </li>
                      <li>
                        <v-avatar size="36"> <img :src="vueicon" /> </v-avatar
                        >Vuex
                      </li>
                    </ul>
                  </v-row>
                </v-card-title>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card flat>
                <v-card-title class="title">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                  >
                    <p class="subheading text-left mb-8">Webデザイン</p>

                    <div>
                      <ul class="font-weight-light">
                        <li>
                          <v-avatar size="36"> <img :src="xdicon" /> </v-avatar
                          >Adobe XD
                        </li>
                        <li>
                          <v-avatar size="36"> <img :src="psicon" /> </v-avatar
                          >Adobe Photoshop
                        </li>
                        <li>
                          <v-avatar size="36"> <img :src="ilicon" /> </v-avatar
                          >Adobe Illustrator
                        </li>
                      </ul>
                    </div>
                  </v-row>
                </v-card-title>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card flat>
                <v-card-title class="title">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                  >
                    <p class="subheading text-left mb-8">
                      インフラ・バックエンド
                    </p>

                    <div>
                      <ul class="font-weight-light">
                        <li>
                          <v-avatar size="36"> <img :src="fbicon" /> </v-avatar
                          >Firebase
                        </li>
                      </ul>
                    </div>
                  </v-row>
                </v-card-title>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </FadeIn>
  </div>
</template>
<script>
import FadeIn from "../components/FadeIn";

export default {
  name: "skill",
  data() {
    return {
      htmlicon: require("@/assets/img/icon/html.png"),
      cssicon: require("@/assets/img/icon/css.png"),
      jsicon: require("@/assets/img/icon/js.png"),
      tsicon: require("@/assets/img/icon/ts.png"),
      reacticon: require("@/assets/img/icon/react.png"),
      nexticon: require("@/assets/img/icon/next.png"),
      vueicon: require("@/assets/img/icon/vue.png"),
      xdicon: require("@/assets/img/icon/xd.png"),
      psicon: require("@/assets/img/icon/ps.png"),
      ilicon: require("@/assets/img/icon/il.png"),
      fbicon: require("@/assets/img/icon/firebase.png")
    };
  },
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

ul {
  list-style: none;
}
</style>
