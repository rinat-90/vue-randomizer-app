<template v-if="teams">
  <v-layout justify-center align-content-center wrap>
     <v-flex 
        md6 v-for="(team, index) in teams" 
        :key="index" 
        class="px-3">
       <v-card 
        :color="colors[index]"
        dark
        class="pa-2 mb-4">
        <v-card-title class="py-0">
          <v-subheader class="text-center">Team {{index + 1}}</v-subheader>
          <v-spacer></v-spacer>
          <v-subheader class="text-center">{{team.length}} players</v-subheader>
        </v-card-title>
        <v-card-text>
          <draggable 
            :list="team" 
            group="players"
            @end="onEnd">
            <v-chip 
              v-for="item in team" 
              :key="item.name"
              draggable
              dark
              class="ml-4 mb-3">
              {{ item.name }}
            </v-chip>   
          </draggable>
        </v-card-text>  
      </v-card> 
     </v-flex>
  </v-layout>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  name: 'Team',
  components:{
    draggable
  },
  computed:{
    teams(){
      return this.$store.getters.GET_TEAMS;
    },
    colors(){
      return this.$store.getters.GET_COLORS;
    }
  },
  methods:{
    onEnd(){
      this.$store.dispatch('UPDATE_TEAMS', this.teams)
    },
  }
}
</script>