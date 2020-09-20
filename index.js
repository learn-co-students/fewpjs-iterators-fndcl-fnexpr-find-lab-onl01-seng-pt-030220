


// function superbowlWin(arrayObj){
// arrayObj.find(findWin)
// }; 

// function findWin(object){
// if (object.result === "W"){
// return object.year} 
// else{
//   return undefined}

// }; 


function superbowlWin(obj){
  const result = obj.find(result => 
      {
      return result.result === "W"
      }
      )
if (result) {
  return result.year
} else {
  return undefined
}

};

// function superbowlWin(record){
//   let win = record.find( ({ result}) => result === "W");
//   // if (win){
//   //   return win.year
//   // } else {
//   //   return undefined
//   // }
//   return win ? win.year : undefined
// }