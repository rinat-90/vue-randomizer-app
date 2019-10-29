<template>
   <v-card class="pa-4 mb-4">
      <card-title></card-title>
      <card-body></card-body>
      <v-divider class="mb-3"></v-divider>
      <card-actions></card-actions>
   </v-card>
</template>
<script>

   import CardTitle from './partials/PlayersListTitle'
   import CardBody from './partials/PlayersListBody'
   import CardActions from './partials/PlayersListActions'

   export default {
      components:{ 
         CardTitle,
         CardBody,
         CardActions
      }
   }
</script>