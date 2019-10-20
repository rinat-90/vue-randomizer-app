<template>
  <v-app>
    <v-content>
      <v-container fluid class="pa-10">
        <v-layout align-content-center justify-center>
          <v-flex md8>
            <!-- form -->
            <v-card class="pa-6 mb-6">
              <v-text-field 
                v-model="player.name" 
                :append-outer-icon="'mdi-plus'"
                :prepend-inner-icon="'mdi-emoticon-happy-outline'"
                @click:append-outer="add"
                label="Enter name">
              </v-text-field>
            </v-card>
            <!-- form  end-->

            <v-card class="pa-6 mb-6">
              <v-card-title class="py-0">
                <div class="headline">My list</div>
                <v-subheader v-if="names">{{names.length}} players</v-subheader>
                <!-- <div class="headline">{{totalPeople}}</div> -->
                <v-spacer></v-spacer>
                <v-chip dark color="blue">Save my list</v-chip>
              </v-card-title>
              <v-card-text class="py-5">
                <v-chip 
                  v-for="item in names" 
                  :key="item.name"
                  @click:close="deleteName(item)"
                  close
                  class="ma-2">
                  {{ item.name }}
                </v-chip>
              </v-card-text>
              <v-divider class="mb-3"></v-divider>
              <v-card-actions>
                <v-layout align-content-space-around align-end>
                  <v-flex class="pa-2">
                    <v-select
                      v-model="valColors"
                      :items="colors"
                      attach
                      chips
                      label="Colors"
                      multiple
                    ></v-select>
                  </v-flex>
                  <v-flex class="pa-2">
                    <v-text-field 
                      v-model="totalTeams"
                      :rules="teamRules"
                      :prepend-inner-icon="'mdi-account-group'"
                      type="number" 
                      label="Teams"
                      class="text-center">
                    </v-text-field>
                  </v-flex>
                  <v-flex class="pa-2">  
                    <div style="height: 55px">
                      <v-btn small class="mx-3" dark color="green" @click="randomize()">randomize</v-btn>
                      <v-btn text @click="reset()">reset</v-btn>
                    </div>
                  </v-flex>
                </v-layout>
                
                
              </v-card-actions>
            </v-card>
            

            <Teams v-if="teams" :teams="teams" :colors="colors" />

          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import Teams from './components/Teams'

export default {
  name: 'App',
  components: {
    Teams
  },
  data(){
    return{
      player:{
        name: '',
        team: null
      },
      totalTeams: 2,
      teams: null,
      colors: ['green', 'red', 'orange', 'black', 'purple', 'teal'],
      valColors: ['green', 'red'],
      teamRules:[ 
        v => !!v || 'Name is required', 
        v => (v && parseInt(v)) <= this.names.length || 'Value is too big',
        v => (v && parseInt(v)) >= 2 || 'Value is too low'
      ],
      names: [
        { name: 'Ronaldo', team: '' },
        { name: 'Messi', team: '' },
        { name: 'Ozil', team: '' },
        { name: 'Salah', team: '' },
        { name: 'Dybala', team: '' },
        { name: 'Bufon', team: '' },
      ]
    }
  },


  computed:{
    totalPeople(){
      return this.names.length ? `${this.names.length} players`: `Add players`
    }
  },

  methods:{
    randomize(){
      let arr = this.names.slice()
      let totalPeopleInTeam = Math.floor(arr.length / this.totalTeams);
      
      this.teams = [];
      for(let i = 0; i < this.totalTeams; i++){
        this.teams[i] = []
        
        for(let j = 0; j < totalPeopleInTeam; j++){
          let randomPlayer = arr[Math.floor(Math.random() * arr.length)];
          randomPlayer.team = (i + 1) 
          this.teams[i].push(randomPlayer)
          arr.splice(arr.indexOf(randomPlayer), 1);
        }
      }

      if(arr.length){
        for(var k = 0; k < arr.length; k++){
          this.teams[k].push(arr[k])
        }
        
        arr = []
        
      }

      return this.teams
    },
    add(){
      if(this.player.name !== ''){
        this.names.push({
          ...this.player
        })
      }
      this.player.name = ''
    },
    onKeyUp(e){
      if(e.keyCode === 13){
        this.names.push({
          ...this.player
        })
      }
    },
    deleteName(name){
      this.names = this.names.filter(item => item.name !== name.name)
    },
    reset(){
      this.names = []
      this.totalTeams = 2
      this.teams = null
    }
  }
};
</script>
<style lang="css">
  
</style>
