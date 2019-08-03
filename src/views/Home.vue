<template>
  <div>

    <v-overlay :value="loading" v-if="!videos.sizes &&  loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <VideoPreviewList
      v-else
      :videos="videos"
    />
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {LOAD_VIDEOS} from '../store/actions.type';
import VideoPreviewList from '../components/VideoPreviewList';

export default {
  components: {
    VideoPreviewList
  },
  created() {
    this.$store.dispatch(LOAD_VIDEOS);
  },
  computed: {
    ...mapGetters({
      loading: 'getLoading',
      error: 'getError',
      videos: 'getVideos'
    })
  }
};
</script>
