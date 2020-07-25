<template>
  <div>
    <v-dialog v-model="dialogYatta" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          YATTA!
        </v-card-title>
        <v-card-text>
          嬉しい出来事をイラストカードにして、Twitterでシェアできるアプリです。
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Vue.js</li>
            <li>Adobe Illustrator</li>
          </ul>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn text href="https://oiwai-9b69a.web.app/" target="_blank">
            <v-icon large>far fa-pig</v-icon>見てみる</v-btn
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
