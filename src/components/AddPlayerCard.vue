<template>
   <v-card class="pa-6 mb-6">
      <v-text-field 
         v-model="player.name" 
         :append-outer-icon="'mdi-plus'"
         :prepend-inner-icon="'mdi-emoticon-happy-outline'"
         @click:append-outer="onPlayerAdd"
         label="Enter name">
      </v-text-field>
   </v-card>
</template>

<script>
   export default {
      data(){
         return{
            player:{
               name: '',
               team: ''
            }
         }
      },
      methods:{
         onPlayerAdd(){
            if(this.player.name !== ''){
               this.$emit('on-player-add', {...this.player})
            }
            this.player.name = ''
         }
      }
   }
</script>