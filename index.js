

function superbowlWin(record){
  let winningTeam = record.find( team => team.result === "W" )
  return !!winningTeam ? winningTeam.year : undefined
}

// function superbowlWin(record){
//   let winningTeam = record.find( function(team) { return team.result === "W"})
//   if (winningTeam){
//     return winningTeam.year
//   }
// }
