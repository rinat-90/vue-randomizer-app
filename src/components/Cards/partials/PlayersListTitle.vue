<template>
  <v-card-title class="py-0">
      <div class="headline">{{ title }}</div>
      <v-subheader>{{ totalPlayers }} players</v-subheader>
      <v-spacer></v-spacer>
      <v-btn text dark color="blue">Save my list</v-btn>
   </v-card-title>
</template>
<script>
export default {
   data(){
      return{
         title: 'My List'
      }
   },
   computed:{
      totalPlayers(){
         return this.$store.getters.GET_PLAYERS.length;
      }
   }
}
</script>