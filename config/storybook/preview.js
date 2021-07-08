import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
import "../../src/assets/styles/index.css";
Vue.use(VueCompositionApi);
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
