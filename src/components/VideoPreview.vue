<template>
  <v-card
    class="mx-auto mb-5"
  >
    <v-img
      class="white--text"
      :height="video.snippet.thumbnails.high.height"
      :width="video.snippet.thumbnails.high.width"
      :src="video.snippet.thumbnails.high.url"
    >
      <v-card-title class="align-end fill-height">
        {{video.snippet.title}}
      </v-card-title>
    </v-img>
    <v-card-actions>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
