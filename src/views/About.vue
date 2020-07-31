<template>
  <div class="about" id="about">
    <h1>About ME</h1>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="auto">
          <FadeRight>
            <v-avatar size="240">
              <v-img :src="imageURL" aspect-ratio="1" light></v-img>
            </v-avatar>
          </FadeRight>
        </v-col>
        <v-col cols="12" md="auto">
          <FadeLeft>
            <h2>Megumi Tanimoto</h2>
            <article>
              法律事務、行政職を経て独学でWebデザイン、プログラミングの勉強をはじめる。
              <br />”相手に寄り添う”ことのできるフロントエンドエンジニアを目指し、日々奮闘中です。
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
  padding-top: 100px;
  padding-bottom: 200px;
  text-align: center;
}

#about h1 {
  font-size: 2em;
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

.fadeIn {
  animation: fadeIn 2s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
