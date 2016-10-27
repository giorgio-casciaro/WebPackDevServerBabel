<template lang="pug">
//
header.uiHeader
  div.uiHeaderLeft: slot(name="left")
  div.uiHeaderCenter: slot
  div.uiHeaderRight: slot(name="right")
//
</template>

<script >

export default {
  props: {},
  components: {

  },
  data(){ return {}; }
}
</script>
<style>

@import "UI/cssVariables.css";

.uiHeader{
	height: var(--icon_size);
  text-align: center;
}

.uiHeaderLeft{
 float: left;
}

.uiHeaderRight{
float: right;
}

.uiHeaderCenter{
	display: inline-block;
  margin-left: var(--icon_size);
	text-align: center;
	line-height: calc(var(--icon_size)*0.9) ;
	& a {
    display: inline-block;
  }
}
</style>
