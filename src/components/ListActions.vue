<template>
<v-card-actions>
   <v-layout row wrap>
      <v-flex xs12 md6>
         <v-radio-group row :max="maxTeams">
            
            <v-radio
            v-for="color in colors"
            :key="color"
            :label="color"
            :color="color"
            :value="color"
            class="text-capitalize">
         </v-radio>

         </v-radio-group>
      </v-flex>
      <v-flex xs12 md6>
         <v-text-field 
            v-model="totalTeams"
            :rules="teamRules"
            :disabled="isDisabled"
            :prepend-inner-icon="'mdi-account-group'"
            type="number" 
            label="Teams"
            class="text-center">
         </v-text-field>
      </v-flex>
      <v-flex xs12 md12>  
         <div style="height: 55px">
            <v-btn 
            @click="onRandomize()"
            :disabled="isDisabled" 
            color="green"
            class="mx-3 text--white"
            small 
            >
            randomize</v-btn>
            <v-btn text @click="onReset()">reset</v-btn>
         </div>
      </v-flex>
   </v-layout>
</v-card-actions>
</template>

<script>
   export default {
      name: 'ListActions',
      props:['colors', 'players'],
      data(){
         return{
            totalTeams: 2,
            teamRules:[ 
               v => !!v || 'Name is required', 
               v => (v && parseInt(v)) <= this.players.length || 'Value is too big',
               v => (v && parseInt(v)) >= 2 || 'Value is too low'
            ],
         }
      },
      computed:{
         isDisabled(){
            return this.players.length < 2 ? true: false
         },
         maxTeams(){
            return this.players.length > 2 ? this.players.length : 2
         },
      },
      methods:{
         onRandomize(){
            this.$emit('on-randomize', this.totalTeams)
         },
         onReset(){
            this.totalTeams = 2
            this.$emit('on-reset')
         }
      }
   }
</script>