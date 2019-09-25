<template>
  <v-card
    class="mx-auto mb-5"
  >
    <v-img
      class="white--text"
      :height="video.snippet.thumbnails.high.height"
      :src="video.snippet.thumbnails.high.url"
    >
      <v-card-title class="align-end fill-height">
        {{video.snippet.title}}
      </v-card-title>
    </v-img>
    <v-card-actions>
      <v-layout >
        <v-flex offset-1>
          <v-checkbox 
            label="Select"
            v-model="videoChecked"
            :disabled="video.isFavorite"
            @change="onSelectVideo(videoChecked)"
          ></v-checkbox>
        </v-flex>
        <v-flex offset-1>
          <v-btn icon @click="playVideo">
            <v-icon color="blue">mdi-play</v-icon>
          </v-btn>
        </v-flex>
        <v-flex offset-1>
          <v-btn icon @click="toggleFavorite">
            <v-icon :color="iconColor">mdi-heart</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
import { 
  ADD_SINGLE_FAVORITE, 
  REMOVE_SINGLE_FAVORITE, 
  ADD_PLAYING_VIDEO 
} from '../../store/actions.type';

export default {
  props: {
    video: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    videoChecked: false
  }),
  computed: {
    iconColor() {
      return this.video.isFavorite? 'red': 'gray';
    }
  },
  methods: {
    onSelectVideo(checked) {
      this.$emit('videoSelected', checked);
    },
    toggleFavorite() {
      if(this.video.isFavorite) this.$store.dispatch(REMOVE_SINGLE_FAVORITE, this.video);
      else this.$store.dispatch(ADD_SINGLE_FAVORITE, this.video);
    },
    playVideo() {
      this.$store.dispatch(ADD_PLAYING_VIDEO, this.video);
    }
  }
}
</script>

<style>

</style>
