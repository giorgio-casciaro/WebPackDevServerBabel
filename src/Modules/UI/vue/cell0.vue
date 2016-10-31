<template lang="pug">
//
mtCell(:title="label",:href="href",:target="target",:value="value")
//
</template>

<script >
import Cell from 'mint-ui/lib/cell';
import 'mint-ui/lib/cell/style.css';
var props = {
  "label":{
    default:""
  },
  "href":{
    default:""
  },
  "target":{
    default:""
  },
  "value":{
    default:""
  }
};

export default {
  props,
  components: {
    mtCell:Cell
  }
}
</script>
