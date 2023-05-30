export default {
  namespaced: true,
  state: {
    type: "",
    colour: "",
    selected: {
      head: "",
      chest: "",
      legs: "",
    },
    sections: [
      {
        items: ["braids", "diva", "default", "shaggy", "styam"],
        type: "head",
        class: "hair",
      },
      {
        items: [
          "dolly",
          "default",
          "sleeveless",
          "sweater",
          "top",
          "will",
          "bardita",
          "denise",
        ],
        type: "chest",
        class: "shirt",
      },
      {
        items: ["ballerina", "cuteskirt", "jeans", "default", "shorts"],
        type: "legs",
        class: "pants",
      },
    ],

    colours: [
      {
        class: "pink",
      },
      {
        class: "orange",
      },
      {
        class: "lilac",
      },
      {
        class: "turquoise",
      },
      {
        class: "yellow",
      },
      {
        class: "mint",
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
    SET_COLOURS(state, colours) {
      state.colour = colours;
    },
  },
};
