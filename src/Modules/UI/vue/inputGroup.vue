<template lang="pug">
//
div.uiInputGroup: slot
//
</template>

<script >
var props = {
};

export default {
  props,
  components: {}
}
</script>
<style>
@import "UI/cssVariables.css";
.uiInputGroup{
  margin-bottom: 1rem;
  border-radius: var(--base_radius);
  overflow: hidden;
}
</style>
