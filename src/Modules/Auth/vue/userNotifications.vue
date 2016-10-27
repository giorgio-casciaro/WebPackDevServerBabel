<template lang="pug">
nav
  ul
    li(v-for="item in items"): a(v-bind:href="item.link") {{item.label}}
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
