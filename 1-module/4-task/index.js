function checkSpam(str) {
  let strDown = str.toLowerCase();
  return strDown.includes(`1xbet`) || strDown.includes(`xxx`) 
}

console.log(checkSpam('1XbeT now'))
console.log(checkSpam('free XXX')) 
console.log(checkSpam('innocent rabbit'))