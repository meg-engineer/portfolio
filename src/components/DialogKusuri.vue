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
  font-size: 0.9rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
  padding: 0.7rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #212529;
  border-radius: 0.5rem;
}

a.btn-malformation {
  font-size: 0.9rem;
  padding: 0.7rem 1.5rem;
  color: #fff;
  border-radius: 100% 80px / 80px 100%;
  background-color: #eb6100;
}

a.btn-malformation:hover {
  color: #fff;
  border-radius: 60% 80% / 100% 80%;
}
</style>
