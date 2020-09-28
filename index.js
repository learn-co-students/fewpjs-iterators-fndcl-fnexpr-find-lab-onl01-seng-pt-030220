
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(record){
  let winningTeam = record.find( function(team) { return team.result === "W"})
  if (winningTeam){
    return winningTeam.year
  }
}

superbowlWin(record)