<template>
  <div class="portfolio" id="portfolio">
    <h1>Portfolio</h1>
    <article>これまでに開発したアプリ,Webデザイン制作物です。</article>
    <div class="container">
      <div class="text-xs-center">
        <v-btn
          slot="activator"
          color="red lighten-2"
          @click="showDialog()"
          dark
        >
          Kusuri
        </v-btn>
        <app-dialog ref="dialog"></app-dialog>
      </div>
      <div class="text-xs-center">
        <v-btn
          slot="activator"
          color="red lighten-2"
          @click="showDialogYatta()"
          dark
        >
          YATTA!
        </v-btn>
        <yatta-dialog ref="dialogYatta"></yatta-dialog>
      </div>
      <div class="text-xs-center">
        <v-btn
          slot="activator"
          color="red lighten-2"
          @click="showDialogPortfolio()"
          dark
        >
          ポートフォリオサイト
        </v-btn>
        <po-dialog ref="dialogPortfolio"></po-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import Dialog from "../components/DialogKusuri.vue";
import DialogYatta from "../components/DialogYatta.vue";
import DialogPortfolio from "../components/DialogPortfolio.vue";

export default {
  name: "portfolio",
  data() {
    return {
      dialog: false,
      dialogYatta: false,
      dialogPortfolio: false
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

#portfolio .container {
  display: flex;
  width: 980px;
  justify-content: space-between;
  margin: 0 auto 65px;
}
</style>
