<template>
  <div>
    <v-dialog v-model="dialogPortfolio" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          ポートフォリオサイト
        </v-card-title>
        <v-card-text>
          ポートフォリオサイトです。
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Vue.js</li>
            <li>Adobe XD</li>
          </ul>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <!-- <v-btn text @click="$vuetify.goTo(0)">
            <v-icon large>far fa-pig</v-icon>サイトトップへ</v-btn
          > -->
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialogPortfolio = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogPortfolio: false
    };
  },
  methods: {
    open() {
      this.dialogPortfolio = true;
    },
    close() {
      this.dialogPortfolio = false;
    }
  }
};
</script>
