<template lang="pug">
div.userRegister
  uiButton.fb(type="primary",size="large") Facebook
  .dividerText: span o
  uiInputGroup
    uiInput.user(placeholder="email@esempio.com")
    uiInput.password(placeholder="password")
  uiButton.register(type="primary",size="large") Registrati
  small.terms Registrandoti accetti i #[a(href="#termini_di_utilizzo") termini di utilizzo ] e la nostra #[a(href="#privacy_policy") privacy policy ]
</template>

<script >
export default {
  props:{
    auth:{
      required:true
    }
  },
  components:{}
}
</script>
<style>
@import "UI/cssVariables.css";
.userRegister{
  text-align: center;
  padding: var(--box_padding);
  background: color(var(--color_2) w(+60%) );
}
.userRegister .terms{
  display: block;
  margin-top:.25rem
}
.userRegister .terms,.userRegister .terms a{
  color:color(var(--color_2) b(+25%) s(-45%) );
}
</style>
