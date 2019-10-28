<template>
  <v-card-title class="py-0">
      <div class="headline">{{ title }}</div>
      <v-subheader>{{ totalPlayers }} players</v-subheader>
      <v-spacer></v-spacer>

      <v-menu bottom left>
         <template v-slot:activator="{ on }">
            <v-btn
               icon
               v-on="on">
               <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
         </template>

         <v-list>
            <v-list-item link>
               <v-list-item-title>Save list</v-list-item-title>
            </v-list-item>
            <v-list-item link>
               <v-list-item-title>Add new list</v-list-item-title>
            </v-list-item>
         </v-list>
      </v-menu>

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