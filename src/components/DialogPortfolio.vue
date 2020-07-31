<template>
  <div>
    <v-dialog v-model="dialogPortfolio" width="500">
      <v-card>
        <v-card-title>
          ポートフォリオサイト
        </v-card-title>
        <v-card-text>
          現在閲覧されているポートフォリオサイトです。<br />
          <br />
          環境開発
          <ul>
            <li>OS : mac</li>
            <li>言語 : HTML,CSS,JavaScript</li>
            <li>FW : Vue.js,Vuetify</li>
            <li>DB : Firebase</li>
          </ul>
        </v-card-text>
        <v-card-actions>
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
