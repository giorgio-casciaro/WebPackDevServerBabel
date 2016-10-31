<template lang="pug">
div.userLogin()
  uiInputGroup
    uiInput.user(placeholder="username",label="test")
    uiInput.password(placeholder="password")
  uiButton(type="primary",size="large") Accedi
  small
    uiInput.remember(type="checkbox",secondaryLabel="Ricordami")
    a.lostPassword(href="#lostPassword") Password Dimenticata?
</template>

<script >
export default {
  props:{
    auth:{
      required:true
    }
  }
}
</script>
<style>
@import "UI/cssVariables.css";
.userLogin{
  text-align: center;
  padding: var(--box_padding);
  background: color(var(--color_2) w(+60%) );
  color: var(--color_white);

}
.userLogin>small{
  margin-top: 1rem;
  display: block;
  overflow: hidden;
  text-shadow: var(--text_shadow_2);
}
.userLogin>small .remember {
  float:left;
  background: none !important;
  & .label{
    color: var(--color_white);
  }
}

.userLogin>small .lostPassword{
  float:right;
  color: var(--color_white)
}
</style>
