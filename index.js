const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let result = array.find(e => e.result === "W")
  console.log(result)
  if (result) {
    // console.log(result)
    return result.year;
  } else {
    return undefined
  };

  }
  
superbowlWin(record);