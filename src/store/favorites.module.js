import { ADD_FAVORITE, REMOVE_FAVORITE } from './mutations.type';
import { 
  SAVE_FAVORITES, 
  ADD_SINGLE_FAVORITE, 
  REMOVE_SINGLE_FAVORITE,
  ADD_ALL_PLAYING_TO_FAVORITES
} from './actions.type';

const state = {
  favorites: []
};

const getters = {
  getFavorites: (state) => state.favorites
};

const mutations =  {
  [ADD_FAVORITE](state, newFavorite) {
    if(!state.favorites.find(f => f.id.videoId === newFavorite.id.videoId)) {
      state.favorites.push({ ...newFavorite, dateAdded: new Date() });
    }
  },
  [REMOVE_FAVORITE](state, favoriteToRemove) {
    state.favorites = state.favorites.filter(record => record.id.videoId !== favoriteToRemove.id.videoId);
  }
};

const actions = {
  [SAVE_FAVORITES]({commit}, favorites) {
    favorites.forEach(favorite => commit(ADD_FAVORITE, favorite));
  },
  [ADD_SINGLE_FAVORITE]({commit}, favorite) {
    commit(ADD_FAVORITE, favorite);
  },
  [REMOVE_SINGLE_FAVORITE]({commit}, favorite) {
    commit(REMOVE_FAVORITE, favorite);
  },
  [ADD_ALL_PLAYING_TO_FAVORITES]({commit, rootState}) {
    rootState.videos.videosPlaying.forEach(videoPlaying => commit(ADD_FAVORITE, videoPlaying));
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
