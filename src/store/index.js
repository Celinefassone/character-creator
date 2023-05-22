import { createStore } from "vuex";
import CharacterModule from "./character.module.js";
import GlobalModule from "./global.module.js";

export default createStore({
  modules: {
    character: CharacterModule,
    global: GlobalModule,
  },
});
