import { ADD_FAVORITE, REMOVE_FAVORITE } from './mutations.type';
import { SAVE_FAVORITES, ADD_SINGLE_FAVORITE, REMOVE_SINGLE_FAVORITE } from './actions.type';

const state = {
  favorites: []
};

const getters = {
  getFavorites: (state) => state.favorites
};

const mutations =  {
  [ADD_FAVORITE](state, newFavorite) {
    if(!state.favorites.find(f => f.id === newFavorite.id)) {
      state.favorites.push(newFavorite);
    }
  },
  [REMOVE_FAVORITE](state, favoriteToRemove) {
    state.favorites = state.favorites.filter(record => record.id !== favoriteToRemove.id);
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
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
