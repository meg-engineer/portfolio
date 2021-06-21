<template>
  <div>
    <v-dialog v-model="dialogBlog" width="500">
      <v-card>
        <v-card-title>ブログ</v-card-title>
        <v-card-text>
          個人ブログです。
          <br />
          <br />開発環境
          <ul>
            <li>OS : mac</li>
            <li>言語 : HTML,CSS,JavaScript</li>
            <li>ライブラリ : Next.js,TailwindCSS,DaisyUI</li>
            <li>CMS : Contentful</li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <a
            href="https://next-contentful-vert.vercel.app/"
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
      dialogBlog: false
    };
  },
  methods: {
    open() {
      this.dialogBlog = true;
    },
    close() {
      this.dialogBlog = false;
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
