export default {
    namespaced: true,
    state: {
        isVisible: false,
        selection: '',
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
    },
  };
  