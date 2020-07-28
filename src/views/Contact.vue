<template>
  <div class="contact" id="contact">
    <h1>Contact</h1>
    <v-container>
      <v-row>
        <v-col>
          <article>
            ご質問、ご感想、お仕事のご相談等、
            <br />お気軽にご寄せください。
            <br />Twitterでもご連絡お待ちしております。
          </article></v-col
        >
        <v-col> <ContactForm /></v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
export default {
  name: "contact",
  components: {
    ContactForm
  }
};
</script>
<style scoped>
#contact {
  width: 100%;
  background-color: #fafafa;
  background-blend-mode: lighten;
  position: relative;
  padding: 130px 0;
}

#contact h1 {
  width: 100%;
  font-size: 2em;
  text-align: center;
}

#contact article {
  position: absolute;
  letter-spacing: 0.1em;
  line-height: 2;
  text-align: center;
  margin-top: 100px;
}
</style>
