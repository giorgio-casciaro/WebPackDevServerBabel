<template lang="pug">
nav.menu.uiMenu
  template(v-for="item in items")
    uiCell(:href="item.link",:target="itemTarget(item)",:icon="item.icon") {{item.label}}
</template>

<script >
var externalLiksRegex = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);
export default {
  data(){
    return {
      externalLiksRegex
    }
  },
  props: {
    items: { default:  {}}
  },
  methods: {
    itemTarget(item){
      if (item.link.match(this.externalLiksRegex))return "_blank";
      return ""
    }
  },
}
</script>
