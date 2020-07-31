<template>
  <div class="portfolio" id="portfolio">
    <h1>Portfolio</h1>

    <article>これまでに開発したアプリ,Webデザイン制作物です。</article>

    <v-container class="pa-4 text-center">
      <v-row class="fill-height" align="center" justify="center">
        <template>
          <v-col cols="12" md="4">
            <v-hover v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                @click="showDialog()"
              >
                <v-img :src="kusuriimage" height="225px">
                  <v-card-title class="title white--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <p class="mt-4 subheading text-left">Kusuri</p>

                      <div>
                        <p
                          class="ma-0 body-1 font-weight-thin font-italic text-left"
                        >
                          日々のクスッと笑える出来事をシェアできるアプリ
                        </p>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
                <app-dialog ref="dialog"></app-dialog>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" md="4">
            <v-hover v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                @click="showDialogYatta()"
              >
                <v-img :src="yattaimage" height="225px">
                  <v-card-title class="title gray--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <p class="mt-4 subheading text-left">YATTA!</p>

                      <div>
                        <p
                          class="ma-0 body-1 font-weight-thin font-italic text-left"
                        >
                          嬉しい出来事をカードにしてTwitterでシェアできるアプリ
                        </p>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
                <yatta-dialog ref="dialogYatta"></yatta-dialog>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" md="4">
            <v-hover v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                @click="showDialogPortfolio()"
              >
                <v-img :src="siteimage" height="225px">
                  <v-card-title class="title gray--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <p class="mt-4 subheading text-left">
                        ポートフォリオサイト
                      </p>
                    </v-row>
                  </v-card-title>
                </v-img>
                <po-dialog ref="dialogPortfolio"></po-dialog>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Dialog from "@/components/DialogKusuri.vue";
import DialogYatta from "@/components/DialogYatta.vue";
import DialogPortfolio from "@/components/DialogPortfolio.vue";

export default {
  name: "portfolio",
  data() {
    return {
      dialog: false,
      dialogYatta: false,
      dialogPortfolio: false,
      kusuriimage: require("@/assets/img/kusuri.jpg"),
      yattaimage: require("@/assets/img/yatta.png"),
      siteimage: require("@/assets/img/home.jpg"),
      transparent: "rgba(0, 0, 0, 0)"
    };
  },
  components: {
    appDialog: Dialog,
    yattaDialog: DialogYatta,
    poDialog: DialogPortfolio
  },
  methods: {
    showDialog() {
      this.$refs.dialog.open();
    },
    showDialogYatta() {
      this.$refs.dialogYatta.open();
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

.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}
</style>
