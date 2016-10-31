<template lang="pug">
//
mtButton.uiButton(:type="type",:size="size"): slot
//
</template>

<script >
import Button from 'mint-ui/lib/button';
import 'mint-ui/lib/button/style.css';
export default {
  props: {
    type: {
      default: "default"
    },
    size: {
      default: "normal"
    }
  },
  components: {
    mtButton: Button
  },
  data() {
    return {};
  }
}
</script>
<style>
@import "UI/cssVariables.css";

button.mint-button--normal {}


.uiButton.mint-button--primary {
  @mixin dark_gradient var(--color_4);
}

button.uiButton {
  @mixin light_gradient var(--color_light_gray);
  line-height: var(--button_height);
  height: auto;
  padding: 0 var(--button_padding);
  border-radius: var(--base_radius);
  font-size: var(--button_font);
  font-family: "Montserrat"
}

button.uiButton[size='medium'] {
  @mixin light_gradient var(--color_light_gray);
  line-height: calc(var(--button_height)/2);
  padding: 0 calc(var(--button_padding)/2);
}

button.uiButton label {}

body .uiButton.fb {
  @mixin dark_gradient var(--color_fb);
}

button.uiButton.green{
  /*background-color: var(--color_green);*/
  @mixin dark_gradient var(--color_green) ;
  display: inline-block;
  /*box-shadow: 0px 0 10px 0 color(var(--color_2) alpha(-50%));
  text-shadow: 0 0 5px  color(var(--color_green) saturation(-30%) blackness(+30%))*/
}
</style>
