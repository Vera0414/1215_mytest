import { createStore } from "vuex";

import user from "./modules/user";
import other from "./modules/other";
export default createStore({
  modules: { user, other },
  state: {
    txt: 'hello_1204'
  },
  actions: {
    sayHi() {
      console.log("hello from root");
    }
  }
})