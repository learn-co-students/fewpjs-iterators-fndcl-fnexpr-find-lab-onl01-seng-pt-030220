

function superbowlWin(record){
  let winningTeam = record.find( function(team) { return team.result === "W"})
  if (winningTeam){
    return winningTeam.year
  }
}