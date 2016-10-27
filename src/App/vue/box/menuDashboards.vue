<template lang="pug">
div
  uiMenu(v-bind:items="items")
</template>

<script >
var data={
  items:{
    home:{
      "label":"Home",
      "link":"test.com"
    }
  }
};
export default {
  data(){ return data; },
  components:{
  }
}
</script>
