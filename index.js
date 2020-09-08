const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
  // console.log(arr)
  let win = arr.find(year => year.result === "W");
  // console.log(win)
  if (win){
    console.log(win)
    return win.year
  }else{
    console.log(undefined)
    return undefined
  }
}


const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

superbowlWin(record);