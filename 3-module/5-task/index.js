function getMinMax(str) {
  let arrayOfShit = str
  .split(' ')
  .filter(item => +item)
  .map(item => Number(item))
  .sort(compareNumeric);
  
  console.log(arrayOfShit);
  
  function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
  
let result = 
    {min: Number(arrayOfShit.slice(0, 1)), 
     max: Number(arrayOfShit.slice(-1)),
             }
  
  return result
}