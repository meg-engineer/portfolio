<template>
  <div class="home" id="home">
    <div>
      <h1>Meg's Portfolio</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style scoped>
#home {
  width: 100%;
  height: 720px;
  background-image: url(../assets/img/main.jpg);
  text-align: center;
}

#home h1 {
  width: 100%;
  margin-top: 300px;
  color: white;
  font-size: 80px;
  font-weight: 400;
  letter-spacing: 0.3em;
}
</style>
