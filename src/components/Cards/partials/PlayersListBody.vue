<template>
   <v-card-text class="py-5">
      <v-chip 
      v-for="player in players" 
      :key="player.name"
      :color="player.team"
      @click:close="onDelete(player)"
      close
      dark
      class="ma-2">
      {{ player.name }}
      </v-chip>
   </v-card-text>
</template>

<script>
export default {
   computed:{
      players(){
         return this.$store.getters.GET_PLAYERS;
      }
   },
   methods:{
      onDelete(player){
         this.$store.dispatch('REMOVE_PLAYER', player)
      }
   }
}
</script>