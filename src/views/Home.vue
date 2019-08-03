<template>
  <v-layout>
    <v-flex
      md12
    >
      <Search @search="searchVideos" />

      <v-overlay :value="loading" v-if="!videos.sizes &&  loading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>

      <VideoPreviewList
        v-else
        :videos="videos"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import {LOAD_ALL_VIDEOS, LOAD_SEARCH_VIDEOS} from '../store/actions.type';
import {SET_SEARCH_TERM} from '../store/mutations.type';

import VideoPreviewList from '../components/VideoPreviewList';
import Search from '../components/Search';

export default {
  components: {
    VideoPreviewList,
    Search
  },
  created() {
    this.$store.dispatch(LOAD_ALL_VIDEOS);
  },
  computed: {
    ...mapGetters({
      loading: 'getLoading',
      error: 'getError',
      videos: 'getVideos'
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
    }
  }
};
</script>
