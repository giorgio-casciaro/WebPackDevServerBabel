<template lang="pug">
//
button.uiButton: slot
//
</template>

<script >
import { Button } from 'mint-ui';
var data={};
export default {
  props: {
  },
  data(){ return data; }
}
</script>

<style>
@import "UI/cssVariables.css";

.uiButton {
  border: none;
  box-shadow: inset 0 0 1px 1px color(var(--color_light_gray) whiteness(+ 5%));
	border-radius:  var(--base_radius);
	padding: calc(var(--base_module)*1) calc(var(--base_module)*2);
	background: var(--color_light_gray);
  background: linear-gradient(to bottom, color(var(--color_light_gray) whiteness(+ 10%)) 0%, color(var(--color_light_gray) blackness(+ 10%) saturation(- 10%)) 100%);
	display: inline-block;
	color:var(--color_black)
}



</style>
