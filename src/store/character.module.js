export default {
  namespaced: true,
  state: {
    head: "",
    chest: "",
    legs: "",
  },
  mutations: {
    SET_HEAD(state, head) {
      state.head = head;
    },
    SET_CHEST(state, chest) {
      state.chest = chest;
    },
    SET_LEGS(state, legs) {
      state.legs = legs;
    },
  },
};
