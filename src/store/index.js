import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
   state:{
      user: null,
      players:[],
      teams:[
         { name: 'Ronaldo', team: '' },
         { name: 'Messi', team: '' },
         { name: 'Ozil', team: '' },
         { name: 'Salah', team: '' },
         { name: 'Dybala', team: '' },
         { name: 'Bufon', team: '' },
      ],
      loading: false,
      error: false
   },
   mutations:{},
   actions:{},
   getters:{
      getPlayers(state){
         return state.players
      },
      getTeams(state){
         return state.teams
      }
   }
}) 