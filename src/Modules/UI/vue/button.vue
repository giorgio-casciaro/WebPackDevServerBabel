<template lang="pug">
//
button.uiButton(:type="type",:size="size"): slot
//
</template>

<script >

export default {
  props: {
    type: {
      default: "default"
    },
    size: {
      default: "normal"
    }
  },
  data() {
    return {};
  }
}
</script>
<style>
@import "UI/cssVariables.css";


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
  font-size: calc(var(--button_font)/1.1);
  line-height: calc(var(--button_height)/1.33);
  padding: 0 calc(var(--button_padding)/2);
}

button.uiButton[size='large'] {
  width:100%
}

.uiButton[type='primary'] {
  @mixin dark_gradient var(--color_4);
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
