export default {
  registerComponents: (Vue) => {
    Vue.component('uiHeader', require("./vue/header"));
    Vue.component('uiMenu', require("./vue/menu"));
    Vue.component('uiOffCanvas', require("./vue/offCanvas"));
    Vue.component('uiIcon', require("./vue/icon"));
    Vue.component('uiButton', require("./vue/button"));
    Vue.component('uiList', require("./vue/list"));
    Vue.component('uiInput', require("./vue/input"));
    Vue.component('uiSearch', require("./vue/search"));
    Vue.component('uiCell', require("./vue/cell"));
    Vue.component('uiInputGroup', require("./vue/inputGroup"));
  }
};
