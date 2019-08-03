import {LOGIN, LOGOUT} from './actions.type';
import {SET_USER, REMOVE_USER} from './mutations.type';

const state = {
  user: null
};

const getters = {
  isLoggedIn(state) {
    return !!state.user;
  },
  getUser(state) {
    return state.user;
  }
};

const mutations = {
  [SET_USER](state, user) {
    state.user = user;
  },
  [REMOVE_USER](state) {
    state.user = null;
  }
};

const actions = {
  async [LOGIN]({commit}, user) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit(SET_USER, user);
        resolve();
      }, 100)
    });
  },
  [LOGOUT]({commit}) {
    commit(REMOVE_USER);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
