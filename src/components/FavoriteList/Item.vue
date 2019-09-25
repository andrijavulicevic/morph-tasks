<template>
  <v-card
    max-width="800"
    class="mx-auto mb-5"
  >
    <v-layout
      py-4
      pl-4
    >
      <v-flex shrink>
        <v-img
          :height="favorite.snippet.thumbnails.medium.height"
          :src="favorite.snippet.thumbnails.medium.url"
        ></v-img>
      </v-flex>
      <v-flex text-center>
        <v-container
          grid-list-lg
          pa-0
        >
          <v-layout column>
            <v-flex>
              {{ favorite.snippet.title }}
            </v-flex>
            <v-flex>
              <v-btn icon @click="removeFav">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-flex>
            <v-flex>
              Added: {{ favorite.dateAdded | date }}
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import { REMOVE_SINGLE_FAVORITE } from '../../store/actions.type';

export default {
  props: {
    favorite: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeFav() {
      this.$store.dispatch(REMOVE_SINGLE_FAVORITE, this.favorite);
    }
  }
}
</script>
