<template>
  <div class="about" id="about">
    <h1>About ME</h1>
    <div class="container">
      <div class="right-container">
        <FadeRight>
          <v-img :src="imageURL" aspect-ratio="1.7"></v-img>
        </FadeRight>
      </div>
      <div class="left container">
        <FadeLeft>
          <article class="text">
            法律事務、行政職を経て独学でWebデザイン、プログラミングの勉強をはじめる。
            <br />”相手に寄り添う”ことのできるフロントエンドエンジニアを目指し、日々奮闘中です。
          </article>
        </FadeLeft>
      </div>
    </div>
  </div>
</template>
<script>
import FadeRight from "@/components/FadeRight";
import FadeLeft from "@/components/FadeLeft";

export default {
  data() {
    return {
      imageURL: require("@/assets/img/download.jpg")
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
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
}

#about h1 {
  font-size: 2em;
}

#about .container {
  display: flex;
  position: relative;
  width: 100%;
  height: 400px;
  margin-top: 0;
  padding-top: 100px;
}

#about .container .right-container {
  width: 50%;
}

#about .container .left-container {
  width: 50%;
}
#about .container h1 {
  width: 100%;
  font-size: 2em;
  margin-bottom: 60px;
  text-align: center;
}

#about article {
  letter-spacing: 0.1em;
  line-height: 1.8;
  margin-bottom: 30px;
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
