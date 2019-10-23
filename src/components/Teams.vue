<template>
  <div>
    <v-card 
      v-for="(team, index) in teams" 
      :key="index" 
      class="pa-2 mb-4">
      <v-card-title class="py-0">
        <v-subheader>Team {{index + 1}}</v-subheader>
      </v-card-title>
      <v-card-text>
        <v-chip 
          v-for="item in team" 
          :key="item.name"
          :color="item.team"
          draggable
          dark
          class="ml-4">
          {{ item.name }}
        </v-chip>   
      </v-card-text>  
    </v-card> 
  </div>
</template>

<script>
export default {
  name: 'Team',
  props:['teams']
}
</script>