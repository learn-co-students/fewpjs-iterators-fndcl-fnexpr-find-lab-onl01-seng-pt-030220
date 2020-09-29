const testVar = {}

function testFunc() {
  return "hi"
}

//Flatiron's solution
superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  return !!result ? result.year : undefined
}



// function superbowlWin(object) {
//   let result = object.find(year, result)
//   if result === "W"
//     return result.year
//   else 
//     undefined 
  
// }