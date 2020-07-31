<template>
  <div>
    <v-row>
      <v-col cols="12" class="pa-0">
        <v-toolbar color="rgba(250, 250, 250)" class="px-10 elevation-0">
          <v-row align="center" justify="center" color="rgba(250, 250, 250)">
            <v-toolbar-items class="hidden-sm-and-down">
              <v-btn
                text
                x-large
                style="text-transform: none"
                @click="$vuetify.goTo(0)"
                >Home</v-btn
              >
              <v-btn
                text
                x-large
                style="text-transform: none"
                @click="$vuetify.goTo('#about', options)"
                >About</v-btn
              >
              <v-btn
                text
                x-large
                style="text-transform: none"
                @click="$vuetify.goTo('#portfolio', options)"
                >Portfolio</v-btn
              >
              <v-btn
                text
                x-large
                style="text-transform: none"
                @click="$vuetify.goTo('#skill', options)"
                >Skill</v-btn
              >
              <v-btn
                text
                x-large
                style="text-transform: none"
                @click="$vuetify.goTo('#contact', options)"
                >Contact</v-btn
              >
            </v-toolbar-items>
            <!-- ここからレスポンシブ対応 -->
            <v-toolbar-icon class="hidden-md-and-up">
              <v-btn
                text
                small
                style="text-transform: none"
                @click="$vuetify.goTo('#about', options)"
                >About</v-btn
              >
              <v-btn
                text
                small
                style="text-transform: none"
                @click="$vuetify.goTo('#portfolio', options)"
                >Portfolio</v-btn
              >
              <v-btn
                text
                small
                style="text-transform: none"
                @click="$vuetify.goTo('#skill', options)"
                >Skill</v-btn
              >
              <v-btn
                text
                small
                style="text-transform: none"
                @click="$vuetify.goTo('#contact', options)"
                >Contact</v-btn
              >
            </v-toolbar-icon>
          </v-row>
        </v-toolbar>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AppNavigation"
};
</script>
