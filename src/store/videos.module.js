import {
  LOAD_VIDEOS,
  CLEAR_VIDEOS,
  ADD_PLAYING_VIDEO,
  REMOVE_PLAYING_VIDEO,
  REMOVE_ALL_PLAYING_VIDEOS
} from './actions.type';
import {
  SET_ERROR,
  TOGGLE_LOADING,
  SET_VIDEOS_STATE,
  RESET_VIDEOS_STATE,
  SET_SEARCH_TERM,
  SET_VIDEO_PLAYING,
  REMOVE_VIDEO_PLAYING,
  RESET_PLAYING_VIDEOS_STATE
} from './mutations.type';
import {searchVideos} from '../api/';

const state = {
  loading: false,
  error: '',
  videoList: [],
  nextPageToken: '',
  searchTerm: '',
  videosPlaying: []
};

const getters = {
  getLoading: state => state.loading,
  getError: state => state.error,
  getVideos: state => state.videoList,
  getVideosPlaying: state => state.videosPlaying
};

const mutations = {
  [TOGGLE_LOADING](state) {
    state.loading = !state.loading;
  },
  [SET_ERROR](state, error) {
    state.error = error;
  },
  [SET_VIDEOS_STATE](state, { videos, token }) {
    state.videoList.push(...videos);
    state.nextPageToken = token;
    state.loading = false;
    state.error = '';
  },
  [RESET_VIDEOS_STATE](state) {
    state.loading = false;
    state.error = '';
    state.nextPageToken = '';
    state.videoList = [];
  },
  [SET_SEARCH_TERM](state, searchTerm) {
    state.searchTerm = searchTerm;
  },
  [SET_VIDEO_PLAYING](state, video) {
    state.videosPlaying.push(video);
  },
  [REMOVE_VIDEO_PLAYING](state, video) {
    state.videosPlaying = state.videosPlaying.filter(
      v => v.id.videoId !== video.id.videoId
    );
  },
  [RESET_PLAYING_VIDEOS_STATE](state) {
    state.videosPlaying = [];
  }
};

const actions = {
  async [LOAD_VIDEOS]({commit, state}, newSearch) {
    if (state.loading) return;
    if(newSearch) commit(RESET_VIDEOS_STATE);
    commit(TOGGLE_LOADING);
    try {
      const response = await searchVideos(state.searchTerm, state.nextPageToken);
      commit(SET_VIDEOS_STATE, {
        videos: response.data.items, 
        token: response.data.nextPageToken
      });
    } catch(error) {
      commit(TOGGLE_LOADING);
      commit(SET_ERROR, error.message)
    }
  },
  [CLEAR_VIDEOS]({commit}) {
    commit(RESET_VIDEOS_STATE);
  },
  [ADD_PLAYING_VIDEO]({commit}, video) {
    commit(SET_VIDEO_PLAYING, video);
  },
  [REMOVE_PLAYING_VIDEO]({commit}, video) {
    commit(REMOVE_VIDEO_PLAYING, video);
  },
  [REMOVE_ALL_PLAYING_VIDEOS]({commit}) {
    commit(RESET_PLAYING_VIDEOS_STATE);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
