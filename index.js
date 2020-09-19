const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

let superbowlWin = (record) => {
  let result = record.find(record => record.result === 'W')
  return !!result ? result.year : undefined
}


// const testVar = {}

// function testFunc() {
//   return "hi"
// }

// [1,3,5,6,8].find(function(e) { return e % 2 === 0 })

// let roommates = ["jess", "winston", "winston", "nick"];
// roommates.find( function(s) { return s === "winston" })
// //=> winston
// roommates.filter(function(s) { return s === "winston" })
// //=> [winston, winston]