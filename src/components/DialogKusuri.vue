<template>
  <div>
    <v-dialog v-model="dialogKusuri" width="500">
      <v-card>
        <v-card-title>Kusuri</v-card-title>
        <v-card-text>
          日々のクスッと笑えるできごとをシェアできるチャットアプリです。
          <br />
          <br />開発環境
          <ul>
            <li>OS : mac</li>
            <li>言語 : HTML,CSS,JavaScript</li>
            <li>FW : Vue.js,Vuex,Vuetify</li>
            <li>DB : Firebase</li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <a
            href="https://kusuri-chat.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-malformation"
            >アプリを見る</a
          >

          <v-spacer></v-spacer>

          <v-btn color="primary" text @click="close()">閉じる</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogKusuri: false
    };
  },
  methods: {
    open() {
      this.dialogKusuri = true;
    },
    close() {
      this.dialogKusuri = false;
    }
  }
};
</script>
<style scoped>
.btn {
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: #67c5ff;
  border: solid 2px #67c5ff;
  border-radius: 3px;
  transition: 0.4s;
}

.btn:hover {
  background: #67c5ff;
  color: white;
}
</style>
