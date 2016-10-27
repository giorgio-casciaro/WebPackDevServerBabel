import Vue from 'vue';
import Vuex from 'vuex';

const StateManager ={
  globalState:{},
  globalMutations:{},
  register(index,state,mutations){
    if(this.globalState[index])state=this.globalState[index];
    var gS=this.globalState[index]=state;
    var gM= this.globalMutations[index]=mutations;
    return {
      mutate(mutationId,params){
        gM[mutationId](gS,params);
      }
    };
  }

};
export default StateManager;
