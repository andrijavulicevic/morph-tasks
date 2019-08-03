import {
  LOAD_ALL_VIDEOS,
  LOAD_SEARCH_VIDEOS,
  CLEAR_VIDEOS
} from './actions.type';
import {
  SET_VIDEOS,
  SET_ERROR,
  TOGGLE_LOADING,
  SET_NEXT_PAGE_TOKEN,
  RESET_VIDEOS_STATE,
  SET_SEARCH_TERM
} from './mutations.type';
import {loadMostPopular, searchVideos} from '../api/';

const state = {
  loading: false,
  error: '',
  videoList: [],
  nextPageToken: '',
  searchTerm: ''
};

const getters = {
  getLoading(state) {
    return state.loading;
  },
  getError(state) {
    return state.error;
  },
  getVideos(state) {
    return state.videoList;
  }
};

const mutations = {
  [TOGGLE_LOADING](state) {
    state.loading = !state.loading;
  },
  [SET_ERROR](state, error) {
    state.error = error;
  },
  [SET_VIDEOS](state, videoList) {
    state.videoList.push(...videoList);
  },
  [SET_NEXT_PAGE_TOKEN](state, token) {
    state.nextPageToken = token;
  },
  [RESET_VIDEOS_STATE](state) {
    state.loading = false;
    state.error = '';
    state.nextPageToken = '';
    state.videoList = [];
  },
  [SET_SEARCH_TERM](state, searchTerm) {
    state.searchTerm = searchTerm;
  }
};

const actions = {
  async [LOAD_ALL_VIDEOS]({commit, state}) {
    if (state.loading) return;
    commit(TOGGLE_LOADING);
    try {
      const response = await loadMostPopular();
      commit(SET_NEXT_PAGE_TOKEN, response.data.nextPageToken);
      commit(SET_VIDEOS, response.data.items);
      commit(TOGGLE_LOADING);
    } catch(error) {
      commit(TOGGLE_LOADING);
      commit(SET_ERROR, error.message)
    }
  },
  async [LOAD_SEARCH_VIDEOS]({commit, state}) {
    if (state.loading) return;
    commit(RESET_VIDEOS_STATE);
    commit(TOGGLE_LOADING);
    try {
      const response = await searchVideos(state.searchTerm);
      commit(SET_VIDEOS, response.data.items);
      commit(TOGGLE_LOADING);
    } catch(error) {
      commit(TOGGLE_LOADING);
      commit(SET_ERROR, error.message)
    }
  },
  async [CLEAR_VIDEOS]({commit}) {
    commit(RESET_VIDEOS_STATE);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
