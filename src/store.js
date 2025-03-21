import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      skillsScore: 0,  // Store the score here
    };
  },
  mutations: {
    setSkillsScore(state, score) {
      state.skillsScore = score;
    },
  },
  actions: {
    updateSkillsScore({ commit }, score) {
      commit('setSkillsScore', score);
    },
  },
  getters: {
    getSkillsScore(state) {
      return state.skillsScore;
    },
  },
});

export default store;
