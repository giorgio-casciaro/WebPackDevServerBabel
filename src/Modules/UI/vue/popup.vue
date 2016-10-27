<template lang="pug">

//
div.uiOffCanvas(:class="{'isOpen':isOpen}")
	uiIcon(v-on:click.native="toggle",:icon="icon")
	mtPopup.uiOffCanvasPopup( v-model="isOpen", :position="from", :modal="false")
		div.uiOffCanvasContainer
			slot
//

</template>

<script >
import { Popup } from 'mint-ui';

var props = {
	"others": {
		default: false
	},
	"icon": {
		default: "menu"
	},
	"container": {
		default: false
	},
	"from": {
		default: "left"
	}
};



var methods = {
	open() {
		this.isOpen = true;
		this.$emit("open");
	},
	close() {
		this.isOpen = false;
		this.$emit("close");
	},
	toggle() {
		console.log("this", this);
		if (!this.isOpen) this.open();
		else this.close();
	}
}

export default {
	props,
	methods,
  components: {
    mtPopup:Popup
  },
	data(){
		return {
			"isOpen": false
		};
	}
}
</script>
<style >

@import "UI/cssVariables.css";

.uiOffCanvasContainer {
	background: #ccc;
	width: 360px;
  max-width: 100%;

}

.uiOffCanvasPopup {
	z-index: 10000;

}

</style>
