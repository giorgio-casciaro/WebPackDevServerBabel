<template lang="pug">
div.userLogin()
  uiInputGroup
    uiInput
    uiInput
  uiButton(type="primary",size="large") Accedi
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
}

</style>
