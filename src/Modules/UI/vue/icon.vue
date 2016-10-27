<template lang="pug">
span(:class="'uiIcon icon icon-'+icon")
</template>

<script >
var data={};
export default {
  props: {
    icon: { default:  ""}
  },
  data(){ return data; }
}
</script>
<style>
@import "UI/cssVariables.css";
.uiIcon{
  display: inline-block;
  text-align: center;
  color: var(--color_dark_gray);
}
.uiIcon:before{
  font-size:calc(var(--icon_size)*0.6);
  height:var(--icon_size);
  width: var(--icon_size);

  margin:0;
  line-height: var(--icon_size);
}
</style>
