<template lang="pug">

//
label.uiInput(:class="['type_'+type,{'active':isActive,'empty':!value,'notEmpty':!!value}]")
	.left
		span.label(v-if="label!==''") {{label}}
		slot(name="left")
	.center
		// TEXT
		.inputBox(v-if="type==='text'")
			input(v-model="value",:state="state",:placeholder="placeholder",type="text",@focus="focus",@unfocus="unfocus",@blur="unfocus")
		// CHECKBOX
		.inputBox(v-if="type==='checkbox'")
			input(v-model="value",:state="state",type="checkbox",@focus="focus",@unfocus="unfocus",@blur="unfocus")
			.fakeInput
	.right
		span.label.secondary(v-if="secondaryLabel!==''") {{secondaryLabel}}
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
	"secondaryLabel": {
		default: ""
	},
	"info": {
		default: ""
	},
	"state": {
		default: ""
	},
	errors() {
		return {
			default: []
		}
	}
};

export default {
	props,
	data() {
		return {
			"isActive": false,
			"value": ""
		};
	},
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
	align-items: center;
	margin-bottom: 1px;
	background-color: var(--field_bg);
}

.uiInput * {
	vertical-align: middle;
}

.uiInput.active {
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
	margin: 0 .5rem 0 .5rem;
}

.uiInput>.left {
	margin: 0 .5rem 0 .5rem;
}

.uiInput .label {
	display: block;
	color: var(--color_dark_gray);
}


/*TEXT*/

.uiInput.type_text input {
	width: 100%;
	padding: 2rem 1.5rem;
	border: none;
	outline: none;
	font-size: 1.6rem;
	background: none;
	color: var(--color_dark_gray);
	font-family: "Montserrat"
}

/*CHECKBOX*/
.uiInput.type_checkbox{}
.uiInput.type_checkbox input {
	opacity: 0; position: absolute; top: -10rem;display:none;
}

.uiInput.type_checkbox .fakeInput {
	border: solid 1px  var(--color_light_gray);
	display: block;
	border-radius: calc(var(--base_radius)/2);
	background:  var(--field_bg);
}

.uiInput.type_checkbox .fakeInput:before {
	content: "x";
	color: var(--color_dark_gray);
	display: block;
	height: 1.5rem;
	font-size: 1.2rem;
	line-height: 1.5rem;
	width: 1.5rem;
}

.uiInput.type_checkbox.notEmpty .fakeInput:before {
	opacity:0;
}

.uiInput.type_checkbox .inputBox {
}
</style>
