import { createStore } from "vuex";
import CharacterModule from "./character.module.js";

export default createStore({
  modules: {
    character: CharacterModule,
  },
});
