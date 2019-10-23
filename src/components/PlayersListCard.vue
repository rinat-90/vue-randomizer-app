<template>
   <v-card class="pa-6 mb-6">
      <players-list-title :playerCount="players.length"></players-list-title>
      <players-list></players-list>
      <list-actions></list-actions>
   </v-card>
</template>
<script>
import PlayersListTitle from './PlayersListTitle'
import PlayersList from './PlayersList'
import ListActions from './ListActions'
export default {
   props: ['players', 'colors'],
   component:{ 
      PlayersListTitle,
      PlayersList,
      ListActions
    },
   data(){
      return{

      }
   }
}
</script>