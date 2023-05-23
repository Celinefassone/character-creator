export default {
  namespaced: true,
  state: {
    type: "",
    selected: {
      head: "",
      chest: "",
      legs: "",
    },
    sections: [
      {
        items: ["braids", "diva", "default", "shaggy"],
        type: "head",
      },
      {
        items: ["dolly", "default", "sleeveless", "sweater", "top"],
        type: "chest",
      },
      {
        items: ["ballerina", "cuteskirt", "jeans", "default", "shorts"],
        type: "legs",
      },
    ],
  },
  mutations: {
    SET_TYPE(state, type) {
      state.type = type;
    },
    SET_SELECTED(state, { type, item }) {
      state.selected[type] = item;
    },
  },
};
