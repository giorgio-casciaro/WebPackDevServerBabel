<template lang="pug">

ul.list.uiList
	li(v-for="item in items"): a(v-bind:href="item.link") {{item.label}}

</template>

<script >
var data = {};
export default {
  props: {
    items: {
      default: {}
    }
  },
  data() {
    return data;
  }
}
</script>
