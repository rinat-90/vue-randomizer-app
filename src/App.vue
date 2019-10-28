<template>
  <v-app>
    <v-content>
      <v-container fluid class="">
        <v-layout align-content-center justify-center>
          <v-flex xs12 md8>
            <!-- Add player top card component -->
            <add-player-card></add-player-card>
            <!--  list of added players card component -->
            <players-list-card></players-list-card>
            <!-- generated teams cards component-->
            <teams-card></teams-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AddPlayerCard from './components/Cards/AddPlayer'
import PlayersListCard from './components/Cards/PlayersList'
import TeamsCard from './components/Cards/GeneratedTeams'
export default {
  name: 'App',
  components: {
    AddPlayerCard,
    PlayersListCard,
    TeamsCard,
  }
};
</script>
<style lang="css">
  
</style>
