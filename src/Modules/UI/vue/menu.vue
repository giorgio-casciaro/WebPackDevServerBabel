<template lang="pug">
nav.menu.uiMenu
  template(v-for="item in items")
    mtCell(:title="item.label",:href="item.link",is-link,:target="itemTarget(item)")
</template>

<script >
import Cell from 'mint-ui/lib/cell';
import 'mint-ui/lib/cell/style.css';
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
  components: {
    mtCell:Cell
  }
}
</script>
