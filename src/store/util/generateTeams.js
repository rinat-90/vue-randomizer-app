export default function(totalTeams, state){
   let arr = [...state.players]
   let totalPeopleInTeam = Math.floor(arr.length / totalTeams);
   let teams = [];
   //teams loop
   for(let i = 0; i < totalTeams; i++){
      teams[i] = []
      //single team loop
      for(let j = 0; j < totalPeopleInTeam; j++){
         let randomPlayer = arr[Math.floor(Math.random() * arr.length)];
         randomPlayer.team = state.colors[i] 
         teams[i].push(randomPlayer)
         arr.splice(arr.indexOf(randomPlayer), 1);
      }
   }
   //adding left item to teams array
   if(arr.length){
      for(var k = 0; k < arr.length; k++){
         arr[k].team = state.colors[k] 
         teams[k].push(arr[k])
      }
      arr = [] 
   }
   return teams
}
