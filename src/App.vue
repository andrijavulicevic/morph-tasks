<template>
  <v-app>
    <v-app-bar app v-if="$route.name !=='login'">
      <v-toolbar-title class="headline text-uppercase">
        <router-link tag="span" to="/">YT search</router-link>
      </v-toolbar-title>
      <v-toolbar-items >
        <v-btn text to="/favorites">Favorites</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn
        text
        @click="logout"
      >
        Logout
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import {LOGOUT, CLEAR_VIDEOS} from './store/actions.type';

export default {
  name: 'App',
  components: {
  },
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT);
      this.$store.dispatch(CLEAR_VIDEOS);
      this.$router.push({name: 'login'});
    }
  }
};
</script>
