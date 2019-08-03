<template>
  <v-layout
      align-center
      justify-center
    >
      <v-flex
        xs12
        sm8
        md4
      >
        <VideoPreview
          v-for="video in videos"
          :key="video.id"
          :video="video"
        />
      </v-flex>
  </v-layout>
</template>

<script>
import VideoPreview from './VideoPreview';

export default {
  props: {
    videos: {
      type: Array,
      required: true
    }
  },
  components: {
    VideoPreview
  }
}
</script>

<style>

</style>
