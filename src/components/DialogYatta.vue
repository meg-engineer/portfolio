<template>
  <div>
    <v-dialog v-model="dialogYatta" width="500">
      <v-card>
        <v-card-title>
          YATTA!
        </v-card-title>
        <v-card-text>
          嬉しい出来事をイラストカードにして、Twitterでシェアできるアプリです。<br />
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
          <v-btn text href="https://oiwai-9b69a.web.app/" target="_blank">
            <v-icon large>far fa-pig</v-icon>アプリを見る</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialogYatta = false">
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
      dialogYatta: false
    };
  },
  methods: {
    open() {
      this.dialogYatta = true;
    },
    close() {
      this.dialogYatta = false;
    }
  }
};
</script>
