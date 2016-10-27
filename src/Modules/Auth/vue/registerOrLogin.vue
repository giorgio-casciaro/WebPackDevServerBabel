<template lang="pug">
div.userRegisterOrLogin
  div.top(:is="currentView",:auth="auth",transition="fade",transition-mode="out-in")
  div.bottom
    div(v-if="currentView==='login'") Non hai ancora un account? #[a(v-on:click="currentView='register'") Registrati]
    div(v-if="currentView==='register'") Sei già registrato? #[a(v-on:click="currentView='login'") Accedi]
</template>

<script >
export default {
  props:{
    currentView:{
      default:"register"
    },
    auth:{
      required:true
    }
  },
  components:{
    register:require("./register"),
    login:require("./login")
  }
}
</script>

<style>
@import "UI/cssVariables.css";
.userRegisterOrLogin>.top{
}
.userRegisterOrLogin>.bottom{
  padding: 1.5rem;
  background: color(var(--color_1) w(+20%) s(-45%) );
  text-align: center;
  text-shadow: var(--text_shadow_2);
  color: #fff ;
  & a {
    color: #fff;
    border-bottom: 1px solid #fff
  }
}
</style>
