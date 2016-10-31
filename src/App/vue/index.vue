<template lang="pug">

//
div.app(:class="activeUiOffCanvas")
	// APP HEADER
	uiHeader.appHeader
		uiOffCanvas(name="mainMenu",slot="left",from="left",@open="openUiOffCanvas",@close="closeUiOffCanvas")
			.uiOffCanvasIntContainer
				uiSearch
				uiMenu(:items="menuItems")
		div.appLogo(): a(href="/#"): img(src='~CivilStyle/Images/LogoText.png')
		uiOffCanvas(icon="mappe",name="dashboardsMenu",slot="right",from="top",@open="openUiOffCanvas",@close="closeUiOffCanvas")
			.uiOffCanvasIntContainer
				uiMenu(:items="menuItems")
		uiOffCanvas(icon="utente",name="profileMenu",slot="right",from="right",@open="openUiOffCanvas",@close="closeUiOffCanvas")
			.uiOffCanvasIntContainer
				h3 Account
				userBox(:auth=auth)
				userNotifications(:auth=auth)
	// APP BODY
	section.body(v-bind:is="state.currentView",:app="this")
	//{{state.currentView}}
	//button(v-on:click="state.currentView='test'") Add 1
	//button(v-on:click="actions.mutate('CHANGE_VIEW','test')") Add 1
	// APP FOOTER
	//footer footer
	//v-once
//

</template>

<script >
export default {
	data() {
		return {
			activeUiOffCanvas: [],
			viewport: {
				height: false,
				width: false
			},
			paddingLeft: 0,
			paddingRight: 0,
			menuItems: {
				chisiamo: {
					"label": "Chi siamo",
					"icon": "chisiamo",
					"link": "http://civilconnect.it/about"
				},
				supporto: {
					"label": "Supporto",
					"icon": "supporto",
					"link": "http://civilconnect.it/supporto"
				},
			}
		};
	},
	components: {
		pageHome: require("./pages/home"),
		pageTest: require("./pages/test"),
		userBox: require("Modules/Auth/vue/userBox"),
		userNotifications: require("Modules/Auth/vue/userNotifications")
	},
	created() {
		this.state = this.$parent.$options.state;
		this.actions = this.$parent.$options.actions;
		this.modules = this.$parent.$options.modules;
		window.addEventListener('resize', () => {
			this.viewport.height = this.$el.clientHeight;
			this.viewport.width = this.$el.clientWidth;
		})
	},
	methods: {
		openUiOffCanvas(component) {
			this.activeUiOffCanvas.push(component.name);
			console.log("this.activeUiOffCanvas", this.activeUiOffCanvas);
		},
		closeUiOffCanvas(component) {
			this.activeUiOffCanvas.splice(this.activeUiOffCanvas.indexOf(component.name), 1)
		}
	}
};
</script>

<style>
@import "UI/cssVariables.css";
a {
	text-decoration: none;
	color: var(--color_dark_gray);
}

p {
	margin: 2rem 0;
}

* {
	box-sizing: border-box;
}

html {
	font-family: "Arial";
}

body {
	font-family: "Montserrat";
	margin: 0
}

small {
	font-size: var(--font_size_small);
	display: block;
}

.app {
	backface-visibility: hidden;
	transition: .2s ease-out;
	font-size: var(--font_size);
	line-height: 1.6em;
	color: var(--color_dark_gray);
	box-sizing: content-box;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0
}


/* OFF CANVAS */

.app.mainMenu {
	left: 100%;
	right: -100%;
	margin-left: -5rem
}

.uiOffCanvas.mainMenu .uiOffCanvasIntContainer {
	margin-left: -5rem;
	padding-left: 5rem;
	color: var(--color_white);
	background: var(--color_3);
	height: 100vh;
	& .uiSearch {
		margin: 0;
		background: color(var(--color_3) l(+20%) s(-20%));
	}
	& .uiMenu{
		padding: 2rem
	}
	& .uiSearch input{
		color: var(--color_white);
	}
	& .uiSearch input::placeholder{
		color: color(var(--color_white) a(-50%));
	}
	& .uiIcon {
		color: var(--color_white);
	}
	& a {
		color: var(--color_white);
	}
}

.app.profileMenu {
	right: 100%;
	left: -100%;
	margin-right: -5rem
}

.uiOffCanvas.profileMenu .uiOffCanvasIntContainer {
	margin-right: -5rem;
	padding-right: 5rem;
	color: var(--color_white);
	background: var(--color_3);
	height: 100vh;
	& >h3 {
		line-height: 5rem;
		background: color(var(--color_3) l(+20%) s(-20%));
		margin: 0
	}
	& .uiSearch {
		background: color(var(--color_3) l(+20%) s(-20%));
	}
	& .uiIcon {
		color: var(--color_white);
	}
	& a {
		color: var(--color_white);
	}
}

.uiOffCanvas.profileMenu .uiOffCanvasIntContainer .mint-cell {
	background: var(--color_3);
}


/* DIVIDER */

.dividerText {
	margin: 2rem 0;
	height: 1rem;
	color: #fff;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}

.dividerText span {
	display: block;
	flex-shrink: 0;
	padding: 0 1rem;
	text-shadow: var(--text_shadow);
}

.dividerText:after,
.dividerText:before {
	content: "";
	flex-grow: 1;
	display: block;
	background: #fff;
	height: 1px;
	overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity .5s
}

.fade-enter,
.fade-leave-active {
	opacity: 0
}


/* ADATTAMENTI INPUT*/

body .uiInput.type_checkbox .fakeInput:before {
	content: "\e800";
	font-family: "civil-icons";
}
</style>
