const state = () => ({
  loading: true,
  title: null,
});

const mutations = {
  setLoaded(state) {
    state.loading = false;
  },
  setTitle(state, newTitle) {
    state.title = newTitle;
  },
};

const actions = {
  configure(context, { title }) {
    context.commit('setTitle', title);
    context.commit('setLoaded');
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
