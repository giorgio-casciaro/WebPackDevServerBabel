<template lang="pug">

.userRegisterOrLogin
	transition(name="fade",mode="out-in")
		component.top(:is="currentView",:auth="auth")
	.bottom
		div(v-if="currentView==='login'") Non hai ancora un account? #[a(v-on:click="currentView='register'") Registrati]
		div(v-if="currentView==='register'") Sei già registrato? #[a(v-on:click="currentView='login'") Accedi]

</template>

<script >
export default {
  props: {
    auth: {
      required: true
    }
  },
  data() {
    return {
      currentView: "register"
    }
  },
  components: {
    register: require("./register"),
    login: require("./login")
  }
}
</script>

<style>
@import "UI/cssVariables.css";
.userRegisterOrLogin {
  background: color(var(--color_2) w(+60%));
}

.userRegisterOrLogin>.bottom {
  padding: 1.5rem;
  background: color(var(--color_1) w(+20%) s(-45%));
  text-align: center;
  text-shadow: var(--text_shadow_2);
  color: #fff;
  & a {
    color: #fff;
    border-bottom: 1px solid #fff
  }
}
</style>
