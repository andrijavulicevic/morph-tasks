<template>
  <v-layout
    align-center
    justify-center
  >
    <v-flex xs12 sm10 md8> 
      <Item
        v-for="favorite in favorites"
        :key="favorite.id.videoId"
        :favorite="favorite"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import Item from './Item';

export default {
  props: {
    favorites: {
      type: Array,
      required: true
    }
  },
  components: {
    Item
  }
}
</script>

<style>

</style>
