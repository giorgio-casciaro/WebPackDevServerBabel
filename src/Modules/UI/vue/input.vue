<template lang="pug">
//
.uiInput(:class="{'active':isActive}")
	.left
		label(v-if="label!==''") {{label}}
	.center
		input(:value="value",:state="state",:placeholder="placeholder",:type="type",@focus="focus",@unfocus="unfocus",@blur="unfocus")
	.right right
		slot
//
</template>

<script >
var props = {
	"type": {
		default: "text"
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
	"isActive": {
		default: false
	},
	errors() {
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
	methods: {
		focus() {
			this.isActive = true;
		},
		unfocus() {
			this.isActive = false;
		}
	}
}
</script>
<style>
@import "UI/cssVariables.css";


.uiInput {
	display: flex;
	background-color: var(--field_bg);
	align-items: center;
	margin-bottom: 1px;

}
.uiInput.active{
	background-color: var(--field_bg_active);
}
.uiInput:focus {
	background: #444
}

.uiInput>.center {
	flex-grow: 1
}

.uiInput>:empty {
	display: none;
}

.uiInput>.right {
	margin: 0 1.5rem 0 .5rem;
}

.uiInput>.left {
	margin: 0 1.5rem 0 .5rem;
}

.uiInput>.center>input {
	width: 100%;
	padding: 2rem 1.5rem;
	border: none;
	outline: none;
	font-size: 1.6rem;
	background: none;
	color: var(--color_dark_gray);
	font-family: "Montserrat"
}
</style>
