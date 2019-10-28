<template v-if="teams">
  <v-layout justify-center align-content-center wrap>
     <v-flex 
        md6 xs12 sm12 v-for="(team, index) in teams" 
        :key="index" 
        class="px-3">
       <v-card 
        v-if="team.length"
        :color="colors[index]"
        dark
        class="pa-2 mb-4">
        <v-card-title class="py-0">
          <v-subheader 
            class="text-center text-capitalize" 
            v-if="teams">
              {{colors[index]}}
          </v-subheader>
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
              outlined
              draggable
              link
              dark
              class="ml-4 mb-3 text-uppercase">
              <v-icon left>mdi-account</v-icon>
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
import { mapGetters } from 'vuex'
export default {
  name: 'Team',
  components:{
    draggable
  },
  computed:{
    ...mapGetters({
      teams: 'GET_TEAMS',
      colors: 'GET_COLORS'
    })
  },
  methods:{
    onEnd(){
      this.$store.dispatch('UPDATE_TEAMS', this.teams)
    },
  }
}
</script>