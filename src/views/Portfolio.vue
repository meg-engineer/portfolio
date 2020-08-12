<template>
  <div class="portfolio" id="portfolio">
    <h1>Portfolio</h1>

    <article>これまでに開発したアプリです。</article>

    <v-container class="pa-4 text-center">
      <v-row class="fill-height" align="center" justify="center">
        <v-col cols="12" md="4">
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 12 : 2" @click="showDialogYatta()">
              <v-img :src="yattaImage" height="225px">
                <v-card-title class="gray--text mt-8 subheading text-left"
                  >YATTA!</v-card-title
                >
                <v-card-subtitle
                  class="ma-0 body-1 font-weight-thin font-italic text-left"
                  >嬉しい出来事をカードにしてTwitterでシェアできるアプリ</v-card-subtitle
                >
              </v-img>
              <yatta-dialog ref="dialogYatta"></yatta-dialog>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4">
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 12 : 2" @click="showDialogKusuri()">
              <v-img :src="kusuriImage" height="225px">
                <v-card-title class="white--text mt-8 subheading text-left"
                  >Kusuri</v-card-title
                >
                <v-card-subtitle
                  class="ma-0 body-1 font-weight-thin font-italic text-left white--text"
                  >日々のクスッと笑える出来事をシェアできるアプリ</v-card-subtitle
                >
              </v-img>
              <kusuri-dialog ref="dialogKusuri"></kusuri-dialog>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="12" md="4">
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 12 : 2" @click="showDialogPortfolio()">
              <v-img :src="siteImage" height="225px">
                <v-card-title class="gray--text mt-8 subheading text-left"
                  >ポートフォリオサイト</v-card-title
                >
              </v-img>
              <po-dialog ref="dialogPortfolio"></po-dialog>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import DialogYatta from "@/components/DialogYatta.vue";
import DialogKusuri from "@/components/DialogKusuri.vue";
import DialogPortfolio from "@/components/DialogPortfolio.vue";

export default {
  name: "portfolio",
  data() {
    return {
      dialogYatta: false,
      dialogKusuri: false,
      dialogPortfolio: false,
      kusuriImage: require("@/assets/img/kusuri.jpg"),
      yattaImage: require("@/assets/img/yatta.png"),
      siteImage: require("@/assets/img/home.jpg"),
      transparent: "rgba(0, 0, 0, 0)"
    };
  },
  components: {
    yattaDialog: DialogYatta,
    kusuriDialog: DialogKusuri,
    poDialog: DialogPortfolio
  },
  methods: {
    showDialogYatta() {
      this.$refs.dialogYatta.open();
    },
    showDialogKusuri() {
      this.$refs.dialogKusuri.open();
    },
    showDialogPortfolio() {
      this.$refs.dialogPortfolio.open();
    }
  }
};
</script>
<style scoped>
#portfolio {
  width: 100%;
  background-color: #fdf5fb;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
}

#portfolio h1 {
  font-size: 2em;
  margin-bottom: 60px;
}

#portfolio article {
  letter-spacing: 0.1em;
  line-height: 1.8;
  margin-bottom: 30px;
}
</style>
