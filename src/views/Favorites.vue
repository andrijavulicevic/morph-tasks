<template>
  <v-layout justify-center>
    <v-flex
      md10
    >
      <h1>Favorites</h1>

      <FavoriteList :favorites="favorites" />
    </v-flex>
  </v-layout>
</template>

<script>
import {mapGetters} from 'vuex';

import FavoriteList from '../components/FavoriteList/index';

export default {
  components: {
    FavoriteList
  },
  computed: {
    ...mapGetters({
      favorites: 'getFavorites'
    })
  }
}
</script>

<style>

</style>
