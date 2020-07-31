<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title>
          Kusuri
        </v-card-title>
        <v-card-text>
          日々のクスッと笑えるできごとをシェアできるチャットアプリです。<br />
          <br />
          環境開発
          <ul>
            <li>OS : mac</li>
            <li>言語 : HTML,CSS,JavaScript</li>
            <li>FW : Vue.js,Vuex,Vuetify</li>
            <li>DB : Firebase</li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-btn text href="https://kusuri-chat.web.app//" target="_blank">
            <v-icon large>far fa-pig</v-icon>アプリを見る</v-btn
          >
          <v-spacer></v-spacer>

          <v-btn color="primary" text @click="dialog = false">
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
      dialog: false
    };
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    }
  }
};
</script>
