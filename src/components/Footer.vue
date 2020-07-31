<template>
  <div id="footer">
    <v-row align="center" justify="center">
      <v-btn
        href="https://github.com/meg-engineer"
        target="_blank"
        class="ma-2"
        text
        icon
      >
        <v-icon class="mx-10 mt-5">fab fa-github</v-icon>
      </v-btn>
      <v-btn
        href="https://twitter.com/MegEngineer"
        target="_blank"
        class="ma-2"
        text
        icon
      >
        <v-icon class="mx-10 mt-5">fab fa-twitter</v-icon>
      </v-btn>
    </v-row>
    <p>© 2020 Meg</p>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#footer {
  background-color: #d9d2d2;
  text-align: center;
  height: 20%;
}

p {
  margin-bottom: 0;
}
</style>
