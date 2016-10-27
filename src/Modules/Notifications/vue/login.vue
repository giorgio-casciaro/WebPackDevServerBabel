<template lang="pug">
div.app
  header
    appMenu.navPrimary(v-bind:items="state.primaryMenu")
      div contenuto menu
    div.logo
      img(src='~CivilStyle/Images/LogoHeader.png')
    appMenu.navDashboards(v-bind:items="state.primaryMenu")
      div contenuto menuaaaaaaaaaaaaaaaaaaaaaaaa
    appMenu.navAuth(v-bind:items="state.primaryMenu")
      div contenuto menu
  section.body(v-bind:is="state.currentView")
  {{state.currentView}}
  button(v-on:click="state.currentView='test'") Add 1
  button(v-on:click="actions.mutate('CHANGE_VIEW','test')") Add 1
  footer footer

</template>

<script >
export default {
  data(){
    console.log("APPcomponendt data",this.$parent);
    this.$parent.$options.appMethods;
    return {
      state:this.$parent.$options.state,
      actions:this.$parent.$options.actions
    };
  },
  components:{
    appMenu:require("./menu"),
    home:require("./pageHome"),
    test:require("./pageTest")
  }
};
</script>

<style>
  p{ white-space: pre;}
  body {
    display: flex;
    font : 100% Helvetica, sans-serif;
    color: #ecf0f1;
    text-align: center;
    background-color: #34495e;
  }
  .container {
    margin: 0 auto;
    padding-top: 70px;
  }
</style>
