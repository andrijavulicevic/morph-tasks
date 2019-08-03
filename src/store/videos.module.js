import {LOAD_VIDEOS} from './actions.type';
import {
  SET_VIDEOS,
  SET_ERROR,
  TOGGLE_LOADING,
  SET_NEXT_PAGE_TOKEN
} from './mutations.type';
import {loadMostPopular} from '../api/';

const state = {
  loading: false,
  error: '',
  videoList: [],
  nextPageToken: ''
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
  }
};

const actions = {
  async [LOAD_VIDEOS]({commit, state}) {
    if (state.loading) return;
    commit(TOGGLE_LOADING);
    try {
      const response = await loadMostPopular();
      console.log(response);
      commit(SET_NEXT_PAGE_TOKEN, response.data.nextPageToken);
      commit(SET_VIDEOS, response.data.items);
      commit(TOGGLE_LOADING);
    } catch(error) {
      console.error(error);
      commit(TOGGLE_LOADING);
      commit(SET_ERROR, error.message)
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
