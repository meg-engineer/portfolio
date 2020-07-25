<template>
  <div class="skill" id="skill">
    <h1>Skill</h1>
    <p>JavaScriptのフレームワークを中心に勉強中です。</p>
    <div class="container">
      <p>
        <v-icon large>fab fa-html5</v-icon>
        HTML5
      </p>
      <p>
        <v-icon large>fab fa-css3-alt</v-icon>
        CSS
      </p>
      <p>
        <v-icon large>fab fa-js-square</v-icon>
        Javascript
      </p>
      <p>
        <v-icon large>fab fa-vuejs</v-icon>
        Vue.js
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "skill",
  data() {}
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

#skill .container {
  display: flex;
  width: 980px;
  justify-content: space-between;
  margin: 0 auto 65px;
}
</style>
