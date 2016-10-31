import R from 'ramda';

export default class Auth {
  constructor(DI,config) {
    this.config = R.merge({
      state: {
        notifications: [],
        loginTry: 0
      }
    }, config );

    this.state = R.clone(this.config.state);
    this.mutations = {
      "LOADED":(state, params)=>state.loaded=true,
      "UNLOADED":(state, params)=>state.loaded=false,
      "CHANGE_VIEW":(state, params)=>state.currentView=params,
    };

    this.modules = {
      stateManager:DI.StateManager.register("Auth",this.state,this.mutations)
    };

    this.actions = {
      mutate:this.modules.stateManager.mutate,
      getNotifications:this.state.notifications,
      login:this.login,
      logout:this.logout
    };
  }
  login(){

  }
  logout(){

  }
}
