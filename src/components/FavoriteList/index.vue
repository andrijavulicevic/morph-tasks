<template>
  <v-layout
    align-center
    justify-center
  >
    <v-flex xs12 sm8 md6> 
      <Item
        v-for="favorite in favorites"
        :key="favorite.id"
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
