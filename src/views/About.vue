<template>
  <div class="about" id="about">
    <h1>About ME</h1>
    <div class="container">
      <div class="right-container"></div>
      <div class="left container">
        <article>
          法律事務、行政職を経て独学でWebデザイン、プログラミングの勉強をはじめる。<br />
          ”相手に寄り添う”ことのできるフロントエンドエンジニアを目指し、日々奮闘中です。
        </article>
        <p class="btn"><a href="consept.html">詳しく見る</a></p>
      </div>
    </div>
  </div>
</template>
<style scoped>
#about {
  width: 100%;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
}

#about h1 {
  font-size: 2em;
  margin-bottom: 60px;
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
</style>
