<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>YouTube search</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        @click="logout"
      >
        Logut
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import {LOGOUT} from './store/actions.type';

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT);
      this.$router.push({name: 'login'});
    }
  }
};
</script>
