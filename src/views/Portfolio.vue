<template>
  <div class="portfolio" id="portfolio">
    <h1>Portfolio</h1>
    <article>これまでに開発したアプリ,Webデザイン制作物です。</article>
    <div class="container">
      <p>
        <img src="hoge.jpg" alt="””" />
      </p>
      <p>
        <img src="hoge.jpg" alt="””" />
      </p>
      <p>
        <img src="hoge.jpg" alt="””" />
      </p>
    </div>
  </div>
</template>
<script>
import ProfileImage from "@/assets/img/profile.png";
export default {
  name: "portfolio",
  data() {
    return {
      ProfileImage: ProfileImage
    };
  }
};
</script>
<style scoped>
#portfolio {
  width: 100%;
  background-color: #fdf5fb;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
}

#portfolio h1 {
  font-size: 2em;
  margin-bottom: 60px;
}

#portfolio article {
  letter-spacing: 0.1em;
  line-height: 1.8;
  margin-bottom: 30px;
}

#portfolio .container {
  display: flex;
  width: 980px;
  justify-content: space-between;
  margin: 0 auto 65px;
}
</style>
