import Vue from 'vue'
import Vuex from 'vuex'
import generateTeams from './util/generateTeams'
Vue.use(Vuex);

export const store = new Vuex.Store({
   state:{
      user: null,
      colors: ['green', 'red', 'orange', 'black', 'purple', 'teal'],
      players:[
         { name: 'Ronaldo', team: '' },
         { name: 'Messi', team: '' },
         { name: 'Ozil', team: '' },
         { name: 'Salah', team: '' },
         { name: 'Dybala', team: '' },
         { name: 'Bufon', team: '' },
      ],
      teams: [],
      loading: false,
      error: false
   },
   mutations:{
      ADD_PLAYER(state, payload){
         state.players.push(payload)
      },
      REMOVE_PLAYER(state, payload){
         state.players = state.players.filter(item => item.name !== payload.name)
      },
      RESET_LIST(state){
         state.players = []
         state.teams = []
      },
      GENERATE_TEAMS(state, payload){
         state.teams = payload
      }
   },
   actions:{
      ADD_PLAYER({ commit }, payload){
         commit('ADD_PLAYER', payload)
      },
      REMOVE_PLAYER({ commit }, payload){
         commit('REMOVE_PLAYER', payload);
      },
      RESET_LIST({ commit }){
         commit('RESET_LIST')
      },
      GENERATE_TEAMS({ commit, state }, payload){
         const teams = generateTeams(payload, state);
         commit('GENERATE_TEAMS', teams);
      }
   },
   getters:{
      GET_PLAYERS(state){
         return state.players
      },
      GET_TEAMS(state){
         return state.teams
      }
   }
}) 