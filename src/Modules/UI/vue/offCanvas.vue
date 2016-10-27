<template lang="pug">


//
div.uiOffCanvas(:class="{'isOpen':isOpen,name:true}")
	uiIcon(v-on:click.native="toggle",:icon="icon")
	div.uiOffCanvasExtContainer
		mtPopup.uiOffCanvasPopup( v-model="isOpen", :position="from", :modal="false")
			div.uiOffCanvasIntContainer
				slot
//


</template>

<script >
import Popup from 'mint-ui/lib/popup';

var props = {
	"name": {
		default: "name"
	},
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
		this.$emit("open", this);
	},
	close() {
		this.isOpen = false;
		this.$emit("close", this);
	},
	toggle() {
		if (!this.isOpen) this.open();
		else this.close();
	}
}

export default {
	props,
	methods,
	components: {
		mtPopup: Popup
	},
	/*created: function () {
		alert("created")
	},*/
	data() {
		return {
			"isOpen": false
		};
	}
}
</script>
<style >
@import "UI/cssVariables.css";
.uiOffCanvas {
	display: inline-block;
}

.uiOffCanvasIntContainer {
	width: 360px;
	max-width: 100%;
}

.uiOffCanvasPopup {
	z-index: 10000;
}

.mint-popup {
	position: fixed;
	background: #fff;
	top: 50%;
	left: 50%;
	transform: translate3d(-50%, -50%, 0);
	backface-visibility: hidden;
	transition: .2s ease-out;
}

.mint-popup-top {
	top: 0;
	right: auto;
	bottom: auto;
	left: 50%;
	-webkit-transform: translate3d(-50%, 0, 0);
	transform: translate3d(-50%, 0, 0);
}

.mint-popup-right {
	top: 0%;
	right: 0;
	bottom: auto;
	left: auto;
	transform: translate3d(0, 0%, 0);
}

.mint-popup-bottom {
	top: auto;
	right: auto;
	bottom: 0;
	left: 50%;
	-webkit-transform: translate3d(-50%, 0, 0);
	transform: translate3d(-50%, 0, 0);
}

.mint-popup-left {
	top: 0%;
	right: auto;
	bottom: auto;
	left: 0;
	transform: translate3d(0, 0%, 0);
}

.popup-slide-top-enter,
.popup-slide-top-leave-active {
	transform: translate3d(-50%, -100%, 0);
}

.popup-slide-right-enter,
.popup-slide-right-leave-active {
	transform: translate3d(100%, -0%, 0);
}

.popup-slide-bottom-enter,
.popup-slide-bottom-leave-active {
	transform: translate3d(-50%, 100%, 0);
}

.popup-slide-left-enter,
.popup-slide-left-leave-active {
	transform: translate3d(-100%, -0%, 0);
}

.popup-slide-left-enter,
.popup-slide-left-leave-active {
	transform: translate3d(-100%, -0%, 0);
}

.popup-fade-enter,
.popup-fade-leave-active {
	opacity: 0;
}

.v-modal-enter {
	-webkit-animation: v-modal-in .2s ease;
	animation: v-modal-in .2s ease
}

.v-modal-leave {
	-webkit-animation: v-modal-out .2s ease forwards;
	animation: v-modal-out .2s ease forwards
}

@-webkit-keyframes v-modal-in {
	0% {
		opacity: 0
	}
}

@keyframes v-modal-in {
	0% {
		opacity: 0
	}
}

@-webkit-keyframes v-modal-out {
	to {
		opacity: 0
	}
}

@keyframes v-modal-out {
	to {
		opacity: 0
	}
}

.v-modal {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: .5;
	background: #000
}


/*# sourceMappingURL=popup.css.map*/
</style>
