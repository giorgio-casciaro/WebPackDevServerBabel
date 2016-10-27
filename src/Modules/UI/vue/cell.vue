<template lang="pug">
//
mtCell()
//
</template>

<script >
import Cell from 'mint-ui/lib/cell';
import 'mint-ui/lib/cell/style.css';
var props = {
  "type":{
    default:"text"
  }
};

export default {
  props,
  components: {
    mtCell:Cell
  }
}
</script>
