export default {
  namespaced: true,
  state: {
    isVisible: false,
    selection: "",
    selected: "",
  },
  mutations: {
    SET_SELECTION(state, selection) {
      state.selection = selection;
    },
    SHOW_POPUP(state) {
      state.isVisible = true;
    },
    HIDE_POPUP(state) {
      state.isVisible = false;
    },
    SET_HEADSELECTED(state, headSelected) {
      state.headSelected = headSelected;
    },
    SET_CHESTSELECTED(state, chestSelected) {
      state.chestSelected = chestSelected;
    },
    SET_LEGSSELECTED(state, legsSelected) {
      state.legsSelected = legsSelected;
    },
  },
};
