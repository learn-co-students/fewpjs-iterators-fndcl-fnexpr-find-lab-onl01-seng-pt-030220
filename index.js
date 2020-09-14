
const superbowlWin =(record) => {
  const response= record.find(function(winner) {
     return winner.result === "W"

  } )


    return  (response === undefined) ? undefined : response.year


}
