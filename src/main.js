//require('offline-plugin/runtime').install();
import Vue from 'vue';
import App from 'App';
import Server from './Server';
import StateManager from './StateManager';
import Router from './Router';
import Auth from 'Modules/Auth';

// Dependencies Injector: definizione dei tool che saranno passati ai vari moduli

var DI={
  Server,// Classe per la gestione della comunicazione con il server
  StateManager, // Classe per la gestione dello store
  Auth, // Classe per la gestione dello store
  Router // Classe per la gestione del routing
};

// App Config routes
var routes={
  "/":()=>{ console.log("ROUTER",this); }
};

// App Config
var CONFIG={
  state:{
    currentView:"pageHome"
  },
  routes
};

// App LOGIC Domain
var app=new App(DI,CONFIG);
console.log("App state",app.state);


import AppUI from "App/vue";
import UI from "Modules/UI";

UI.registerComponents(Vue);

// App UI based on domain data
var vue=new Vue({
    state:app.state,
    actions:app.actions,
    modules:app.modules,
    components:{
      app:require("App/vue")
    },
    el:"#approot",
    render: createElement => {
      console.log("constructor Vue",AppUI);
      return createElement(AppUI);//renderFunc();
    },
});
