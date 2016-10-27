<template lang="pug">
//
div
	presentation.presentation
	registerOrLogin.registerOrLogin(:auth="app.modules.auth")
//
</template>

<script >
export default {
  props:{
    app:{
			required:true
		}
  },
  components: {
    presentation: require("App/vue/box/presentation"),
    registerOrLogin: require("Modules/Auth/vue/registerOrLogin"),
  }
}
</script>
