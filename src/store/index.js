import { createStore } from "vuex";

export default createStore({
  namespaced: true,
  state: {
    head: "",
    chest: "",
    legs: "",
  },
});
