<template>
  <div class="skill" id="skill">
    <h1>Skill</h1>
    <article>JavaScriptのフレームワークを中心に勉強中です。</article>
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
      <p>
        <img src="hoge.jpg" alt="””" />
      </p>
      <p>
        <img src="hoge.jpg" alt="””" />
      </p>
    </div>
    <p class="btn">
      <a href="consept.html">商品一覧</a>
    </p>
  </div>
</template>
<script>
import ProfileImage from "@/assets/img/profile.png";
export default {
  name: "skill",
  data() {
    return {
      ProfileImage: ProfileImage
    };
  }
};
</script>
<style scoped>
#skill {
  width: 100%;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
}

#skill h1 {
  font-size: 2em;
  margin-bottom: 60px;
}

#skill article {
  letter-spacing: 0.1em;
  line-height: 1.8;
  margin-bottom: 30px;
}

#skill .container {
  display: flex;
  width: 980px;
  justify-content: space-between;
  margin: 0 auto 65px;
}
</style>
