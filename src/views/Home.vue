<template>
  <v-layout justify-center class="mb-10 mt-5">
    <v-flex
      md10
    >
      <h1>Videos</h1>

      <!-- LOADING -->
      <v-overlay v-if="!videos.length && loading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
      
      <!-- ERROR -->
      <v-alert v-else-if="error" type="error">
        {{error}}
      </v-alert>

      <!-- SUCCESS -->
      <div v-else>
        <Search @search="searchVideos" />
        <VideoList
          :videos="videos"
          :favorites="favorites"
        />

        <v-layout justify-center aling-center>
          <v-btn 
            v-if="videos.length"
            :loading="loading && !!videos.length"
            @click="loadMoreResults"
          >
            Load More...
          </v-btn>
        </v-layout>
      </div>
      
      <div>
        <div 
          v-if="playingVideos.length"
          class="all-videos-control" 
        >
          <v-btn 
            class="mx-2" 
            fab dark 
            color="primary"
            @click="stopAllPlayingVideos"
          >
            <v-icon dark>mdi-stop</v-icon>
          </v-btn>
          <v-btn 
            class="mx-2" 
            fab dark 
            color="primary"
            @click="addAllPlayingToFavorite"
          >
            <v-icon dark>mdi-heart</v-icon>
          </v-btn>
        </div>
        <VideoModal
          v-for="video in playingVideos"
          :key="video.id.videoId"
          :video="video"
          />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import {
  LOAD_VIDEOS,
  REMOVE_ALL_PLAYING_VIDEOS,
  ADD_ALL_PLAYING_TO_FAVORITES
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
    this.$store.dispatch(LOAD_VIDEOS);
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
      this.$store.dispatch(LOAD_VIDEOS, true);
    },
    stopAllPlayingVideos() {
      this.$store.dispatch(REMOVE_ALL_PLAYING_VIDEOS);
    },
    addAllPlayingToFavorite() {
      this.$store.dispatch(ADD_ALL_PLAYING_TO_FAVORITES);
    },
    loadMoreResults() {
      this.$store.dispatch(LOAD_VIDEOS);
    }
  }
};
</script>

<style>
.all-videos-control  {
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 9999;
}
</style>
