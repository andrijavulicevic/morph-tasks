<template>
  <v-layout
    align-center
    justify-center
  >
    <v-flex xs12 sm8 md6>  
      <v-layout>
        <v-flex class="mb-5">
          <v-btn 
            color="pink" 
            :disabled="!selectedVideos.length" 
            @click="saveFavorites"
          >
            <v-icon color="white">mdi-heart</v-icon>
            <span class="white--text">Add to favorites</span>
          </v-btn>
        </v-flex>
      </v-layout>

      <Item
        v-for="video in videosWithFavFlag"
        :key="video.id"
        :video="video"
        @videoSelected="(flag) => addVideoToSelected(video, flag)"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import Item from './Item';
import { SAVE_FAVORITES } from '../../store/actions.type';

export default {
  props: {
    videos: {
      type: Array,
      required: true
    },
    favorites: {
      type: Array,
      required: false
    }
  },
  components: {
    Item
  },
  data: () => ({
    selectedVideos: []
  }),
  computed: {
    videosWithFavFlag() {
      if(!this.favorites.length) return this.videos;

      const videosWithFavs = [];
      this.videos.forEach(video => {
        if(this.favorites.find(fav => fav.id ===  video.id)) {
          videosWithFavs.push({ ...video, isFavorite: true });
        } else {
          videosWithFavs.push({ ...video, isFavorite: false });
        }
      });
      return videosWithFavs;
    }
  },
  methods: {
    addVideoToSelected(video, flag) {
      if (flag) {
        this.selectedVideos.push(video);
      } else {
        this.selectedVideos = this.selectedVideos.filter(v =>  v.id !== video.id);
      }
    },
    saveFavorites() {
      this.$store.dispatch(SAVE_FAVORITES, this.selectedVideos);
      this.selectedVideos = [];
    }
  }
}
</script>

<style>

</style>
