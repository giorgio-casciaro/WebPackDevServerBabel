
import {EventEmitter}  from 'eventemitter3';

import R from 'ramda';

export default class Notifications {
  constructor(DI,config) {
    this.config = R.merge({
      path: "./App",
      routes: {},
      state: {
        loaded:false
      }
    }, config );

    this.state = R.clone(this.config.state);
    this.mutations = {
      "LOADED":(state, params)=>state.loaded=true,
      "UNLOADED":(state, params)=>state.loaded=false,
      "CHANGE_VIEW":(state, params)=>state.currentView=params,
    };
    this.stateManager =DI.StateManager.register("App",this.state,this.mutations);

    this.actions = {
      mutate:this.stateManager.mutate
    };

    //this.router = DI.Router(this.routes);
    //this.server = DI.Server;
    //this.store = DI.Store({ state: this.state, mutations: this.mutations });
  }
}
