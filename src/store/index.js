import Vue from 'vue'
import Vuex from 'vuex'
import generateTeams from './util/generateTeams'
Vue.use(Vuex);

export const store = new Vuex.Store({
   state:{
      user: null,
      colors: ['green', 'red', 'orange', 'black', 'purple', 'teal', 'brown', 'lime', 'cyan', 'indigo', 'blue-grey'],
      players:[
         {name: 'Ronaldo', team: ''},
         {name: 'Dybala', team: ''},
         {name: 'Messi', team: ''},
         {name: 'Sandro', team: ''},
         {name: 'Salah', team: ''},
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
         state.players = payload[0]
         state.teams = payload[1]
      },
      REMOVE_PLAYER_FROM_TEAM(state, payload){
         state.teams = payload
      },
      RESET_LIST(state){
         state.players = []
         state.teams = []
      },
      GENERATE_TEAMS(state, payload){
         state.teams = payload
      },
      UPDATE_TEAMS(state, payload){
         state.teams = payload
      }
   },
   actions:{
      ADD_PLAYER({ commit }, payload){
         commit('ADD_PLAYER', payload)
      },
      REMOVE_PLAYER({ commit, state }, payload){
         const players = state.players.filter(item => item.name !== payload.name)
         const teams = state.teams.map(list => {
            return list.filter(item => item.name !== payload.name);
         });
         commit('REMOVE_PLAYER', [players,teams]);
      },
      RESET_LIST({ commit }){
         commit('RESET_LIST')
      },
      GENERATE_TEAMS({ commit, state }, payload){
         const teams = generateTeams(payload, state);
         commit('GENERATE_TEAMS', teams);
      },
      UPDATE_TEAMS({ commit }, payload){
         commit('UPDATE_TEAMS',payload);
      }
   },
   getters:{
      GET_PLAYERS(state){
         return state.players
      },
      GET_TEAMS(state){
         return state.teams
      },
      GET_COLORS(state){
         return state.colors
      },
      GET_PLAYERS_COUNT(state){
         return state.players.length
      },
      GET_TEAMS_COUNT(state){
         return state.teams.length
      },
   }
}) 