function checkSpam(str) {
  let strDown = str.toLowerCase();
  if (strDown.includes(`1xbet`) || strDown.includes(`xxx`)) {
      return true;
  } else return false;
}

console.log(checkSpam('1XbeT now'))
console.log(checkSpam('free XXX')) 
console.log(checkSpam('innocent rabbit'))

