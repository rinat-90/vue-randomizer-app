<template>
<v-card-actions>
   <v-text-field 
      v-model="totalTeams"
      :rules="teamRules"
      :disabled="isDisabled"
      :prepend-inner-icon="'mdi-account-group'"
      type="number" 
      label="Teams"
      class="text-center">
   </v-text-field>
   <v-spacer></v-spacer>
   <v-btn 
      @click="onRandomize()"
      :disabled="isDisabled" 
      color="success"
      class="mx-3 text--white"
      small 
      dark
      >
      randomize</v-btn>
      <v-btn text @click="onReset()">reset</v-btn>
</v-card-actions>
</template>

<script>
   export default {
      name: 'ListActions',
      data(){
         return{
            totalTeams: 2,
            teamRules:[ 
               v => !!v || 'Name is required', 
               v => (v && parseInt(v)) <= this.$store.getters.GET_PLAYERS_COUNT || 'Value is too big',
               v => (v && parseInt(v)) >= 2 || 'Value is too low'
            ],
         }
      },
      computed:{
         isDisabled(){
            return this.$store.getters.GET_PLAYERS_COUNT < 2 ? true : false
         },
         maxTeams(){
            return this.$store.getters.GET_PLAYERS_COUNT > 2 ? this.$store.getters.GET_PLAYERS_COUNT : 2
         },
      },
      methods:{
         onRandomize(){
            this.$store.dispatch('GENERATE_TEAMS', this.totalTeams)
         },
         onReset(){
            this.totalTeams = 2
            this.$store.dispatch('RESET_LIST')
         }
      }
   }
</script>