<template>
  <div class="about" id="about">
    <h1>About ME</h1>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="auto" class="about-img">
          <FadeRight>
            <v-avatar size="240">
              <v-img :src="imageURL" aspect-ratio="1" light></v-img>
            </v-avatar>
          </FadeRight>
        </v-col>
        <v-col cols="12" md="auto">
          <FadeLeft>
            <h2 class="mb-5">Megumi Tanimoto</h2>
            <article>
              山口県生まれ。
              <br />大学卒業後、法律事務、公務員を経てプログラミングとWebデザインの勉強を始める。
              <br />UI/UXを意識したデザインの設計からモダンなフロントエンド開発ができるエンジニアを目指し日々勉強中です。
            </article>
          </FadeLeft>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import FadeRight from "@/components/FadeRight";
import FadeLeft from "@/components/FadeLeft";

export default {
  data() {
    return {
      imageURL: require("@/assets/img/me.png")
    };
  },
  components: {
    FadeRight,
    FadeLeft
  }
};
</script>
<style scoped>
#about {
  width: 100%;
  padding-top: 200px;
  padding-bottom: 200px;
}

#about h1 {
  font-size: 2em;
  text-align: center;
}

#about h2 {
  font-size: 1.5em;
  letter-spacing: 0.1em;
  line-height: 1.8;
}

#about article {
  letter-spacing: 0.1em;
  line-height: 1.8;
}

/* レスポンシブ */
@media screen and (max-width: 425px) {
  .about-img {
    text-align: center;
  }

  #about h2 {
    text-align: center;
  }
}
</style>
