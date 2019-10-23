<template>
  <v-app>
    <v-content>
      <v-container fluid class="pa-10">
        <v-layout align-content-center justify-center>
          <v-flex xs12 md8>
            <add-player-card @on-player-add="addPlayer"></add-player-card>

            <v-card class="pa-6 mb-6">

              <players-list-titile
                :playerCount="players.length">
              </players-list-titile>

              <players-list 
                :players="players" 
                @on-delete="deletePlayer">
              </players-list>

              <v-divider class="mb-3"></v-divider>
                
              <list-actions 
                :players="players"
                :colors="colors"
                @on-randomize="randomize"
                @on-reset="reset">
              </list-actions>

            </v-card>
            
            <!-- teams cards -->
            <Teams v-if="teams" :teams="teams" />

          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import Teams from './components/Teams'
import ListActions from './components/ListActions'
import AddPlayerCard from './components/AddPlayerCard'
import PlayersList from './components/PlayersList'
import PlayersListTitile from './components/PlayersListTitle'

export default {
  name: 'App',
  components: {
    Teams,
    ListActions,
    AddPlayerCard,
    PlayersList,
    PlayersListTitile
  },
  data(){
    return{
      players: [],
      teams: null,
      colors: ['green', 'red', 'orange', 'black', 'purple', 'teal'],
    }
  },


  computed:{
    totalPeople(){
      return this.players.length ? `${this.players.length} players`: `Add players`
    },
    
    computedColors(){
      return this.players.length > 2 ? this.colors.slice(0, this.players.length ) : this.colors.slice(0, 2) 
    }
  },

  methods:{
    randomize(totalTeams){
      let arr = [...this.players]
      let totalPeopleInTeam = Math.floor(arr.length / totalTeams);
      this.teams = [];
      //teams loop
      for(let i = 0; i < totalTeams; i++){
        this.teams[i] = []
        //single team loop
        for(let j = 0; j < totalPeopleInTeam; j++){
          let randomPlayer = arr[Math.floor(Math.random() * arr.length)];
          randomPlayer.team = this.colors[i] 
          this.teams[i].push(randomPlayer)
          arr.splice(arr.indexOf(randomPlayer), 1);
        }
      }
      //adding left item to teams array
      if(arr.length){
        for(var k = 0; k < arr.length; k++){
          arr[k].team = this.colors[k]
          this.teams[k].push(arr[k])
        }
        arr = [] 
      }
      return this.teams
    },
    addPlayer(player){
      this.players.push(player)
    },
    deletePlayer(player){
      this.players = this.players.filter(item => item.name !== player.name)
    },
    reset(){
      this.players = []
      this.teams = null
    }
  }
};
</script>
<style lang="css">
  
</style>
