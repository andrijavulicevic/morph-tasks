<template>
  <v-dialog
    v-model="dialog"
    persistent
    :width="width + 30"
  >
    <v-card>
      <!-- <v-card-title
        class="headline grey lighten-2"
        primary-title
      >
        {{video.snippet.title}}
      </v-card-title> -->

      <v-card-text>
        <iframe 
          :src="videoSrc" 
          frameborder="0"
          :width="width"
          :height="height"
        ></iframe>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="dialog = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    dialog: true,
    width: 720,
    height: 360
  }),
  computed: {
    videoSrc() {
      return `https://www.youtube.com/embed/${this.video.id}?autoplay=1&showinfo=0&controls=0&fs=0&disablekb=1`;
    }
  },
  methods: {
    closeVideoModal() {
      this.$store.dispatch(REMOVE_PLAYING_VIDEO, video);
      this.dialog = false;
    }
  }
}
</script>
