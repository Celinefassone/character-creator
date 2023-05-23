export default {
  namespaced: true,
  state: {
    isVisible: false,
  },
  mutations: {
    SHOW_POPUP(state) {
      state.isVisible = true;
    },
    HIDE_POPUP(state) {
      state.isVisible = false;
    },
  },
};
