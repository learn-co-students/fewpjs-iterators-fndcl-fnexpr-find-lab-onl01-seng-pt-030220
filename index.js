// const testVar = {}

// function testFunc() {
//   return "hi"
// }

function superbowlWin(record){
  let win = record.find( ({ result}) => result === "W");
  // if (win){
  //   return win.year
  // } else {
  //   return undefined
  // }
  return win ? win.year : undefined
}