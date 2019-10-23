<template>
  <v-card-title class="py-0">
      <div class="headline">{{title}}</div>
      <v-subheader v-if="length">{{length}} players</v-subheader>
      <v-spacer></v-spacer>
      <v-btn text dark color="blue">Save my list</v-btn>
   </v-card-title>
</template>
<script>
export default {
   props: ['length'],
   data(){
      return{
         title: 'My List'
      }
   }
}
</script>