function superbowlWin(arr) {
  let win = arr.find(yearResult => yearResult.result === "W")
  if (win) {
    return win.year
  }

}
