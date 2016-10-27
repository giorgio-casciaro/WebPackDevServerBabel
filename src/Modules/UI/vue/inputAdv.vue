<template lang="pug">
//
mtField(:value="value",:state="state",:placeholder="placeholder",:type="type",:label="label")
//
</template>

<script >
import Field from 'mint-ui/lib/field';
import 'mint-ui/lib/field/style.css';
var props = {
  "type":{
    default:"text"
  },
  "placeholder": {
    default: ""
  },
  "label": {
    default: ""
  },
  "state": {
    default: ""
  },
  errors(){
    return {
      default: []
    }
	},
  "value": {
    default: ""
	}
};

export default {
  props,
  components: {
    mtField:Field
  }
}
</script>
