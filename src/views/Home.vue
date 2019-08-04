<template>
  <v-layout justify-center>
    <v-flex
      md10
    >
      <h1>Videos</h1>

      <Search @search="searchVideos" />

      <v-overlay :value="loading" v-if="!videos.sizes &&  loading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>

      <VideoList
        v-else
        :videos="videos"
        :favorites="favorites"
      />

      <div>
        <v-btn 
          v-if="playingVideos.length"
          class="mx-2" 
          fab dark 
          color="primary"
          @click="stopAllPlayingVideos"
        >
          <v-icon dark>mdi-stop</v-icon>
        </v-btn>
        <VideoModal
          v-for="video in playingVideos"
          :key="video.id"
          :video="video"
          />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import {
  LOAD_ALL_VIDEOS,
  LOAD_SEARCH_VIDEOS,
  REMOVE_ALL_PLAYING_VIDEOS
} from '../store/actions.type';
import {SET_SEARCH_TERM} from '../store/mutations.type';

import VideoList from '../components/VideoList/index';
import Search from '../components/Search';
import VideoModal from '../components/VideoModal';

export default {
  components: {
    VideoList,
    Search,
    VideoModal
  },
  created() {
    this.$store.dispatch(LOAD_ALL_VIDEOS);
  },
  computed: {
    ...mapGetters({
      loading: 'getLoading',
      error: 'getError',
      videos: 'getVideos',
      favorites: 'getFavorites',
      playingVideos: 'getVideosPlaying'
    })
  },
  methods: {
    ...mapMutations({
      setSearchTerm: SET_SEARCH_TERM
    }),
    searchVideos(searchTerm) {
      if(!searchTerm) return;
      this.setSearchTerm(searchTerm);
      this.$store.dispatch(LOAD_SEARCH_VIDEOS);
    },
    stopAllPlayingVideos() {
      this.$store.dispatch(REMOVE_ALL_PLAYING_VIDEOS);
    }
  }
};
</script>

<style>
.stop-all-btn  {
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 9999;
}
</style>
