<template lang="pug">

//
uiInput.uiSearch(placeholder="Cerca")
  uiIcon(icon="annulla",slot="left")
  uiIcon(icon="cerca")
//

</template>

<script >
var props = {
};

export default {
  props,
}
</script>
<style>
.uiSearch.uiInput input {
  padding: 0
}
.uiSearch.uiInput>.right {
	margin: 0 1rem 0 .5rem;
}
.uiSearch.uiInput>.left {
	margin: 0
}
</style>
