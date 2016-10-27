<template lang="pug">
//
div.app(:class="activeUiOffCanvas")
	// APP HEADER
	uiHeader.appHeader
		uiOffCanvas(name="mainMenu",slot="left",from="left",@open="openUiOffCanvas",@close="closeUiOffCanvas")
			uiMenu(:items="menuItems")
		div.appLogo(): a(href="/#"): img(src='~CivilStyle/Images/LogoText.png')
		uiOffCanvas(icon="mappe",name="dashboardsMenu",slot="right",from="top",@open="openUiOffCanvas",@close="closeUiOffCanvas")
			uiMenu(:items="menuItems")
		uiOffCanvas(icon="utente",name="profileMenu",slot="right",from="right",@open="openUiOffCanvas",@close="closeUiOffCanvas")
			uiMenu(:items="menuItems")
	// APP BODY
	section.body(v-bind:is="state.currentView",:app="this")
	//{{state.currentView}}
	//button(v-on:click="state.currentView='test'") Add 1
	//button(v-on:click="actions.mutate('CHANGE_VIEW','test')") Add 1
	// APP FOOTER
	footer footer
	//v-once
//
</template>

<script >
export default {
	data() {
		return {
			activeUiOffCanvas:[],
			viewport: {height:false,width:false},
			paddingLeft: 0,
			paddingRight: 0,
			menuItems: {
				home: {
					"label": "Home",
					"link": "/#"
				},
				about: {
					"label": "About",
					"link": "http://civilconnect.it/about"
				},
				supporto: {
					"label": "Supporto",
					"link": "http://civilconnect.it/supporto"
				},
			}
		};
	},
	components: {
		pageHome: require("./pages/home"),
		pageTest: require("./pages/test")
	},
	created () {
		this.state=this.$parent.$options.state;
		this.actions=this.$parent.$options.actions;
		this.modules=this.$parent.$options.modules;
	  window.addEventListener('resize', () => {
	    this.viewport={height:this.$el.clientHeight,width:this.$el.clientWidth}
	  })
	},
	methods: {
		openUiOffCanvas(component){
			this.activeUiOffCanvas.push(component.name);
			console.log("this.activeUiOffCanvas",this.activeUiOffCanvas);
		},
		closeUiOffCanvas(component){
			this.activeUiOffCanvas.splice(this.activeUiOffCanvas.indexOf(component.name), 1)
		}
	}
};
</script>

<style>
@import "UI/cssVariables.css";

a{
	text-decoration: none;
	color:  var(--color_dark_gray);
}

p {
	margin: 2rem 0;
}

* {
	box-sizing: border-box;
	vertical-align: middle;
}
html {
	font-family: "Arial";
}
body {
	font-family: "Montserrat";
	margin: 0
}
small{
	font-size: var(--font_size_small);text-shadow: var(--text_shadow_3);
}
.app{
	backface-visibility: hidden;
  transition: .2s ease-out;
	font-size: var(--font_size);
	line-height: 1.6em;
	color:  var(--color_dark_gray);
}
.app.mainMenu{
	padding-left: 360px
}

.app.profileMenu{
	padding-right: 360px
}

/* DIVIDER */

.dividerText{
  margin: 2rem 0; height: 1rem;color: #fff;
	display: flex;
	flex-direction: row ;
	justify-content:  space-between ;
	align-items:center;
}
.dividerText span{
		display: block;
		flex-shrink: 0;
		padding: 0 1rem;
		text-shadow: var(--text_shadow);
}
.dividerText:after,.dividerText:before{
  content: "";
	flex-grow: 1;
	display: block;
	background: #fff;
	height: 1px;
	overflow: hidden;
}

/*TRANSITIONS*/
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
</style>
