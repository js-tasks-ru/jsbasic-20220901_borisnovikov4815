
function sumSalary(salaries) {
  let sum = 0;
    for (let key in salaries) {
     
      if (isNaN(salaries[key]) === true || isFinite(salaries[key]) === false) continue;
      //if (typeof salaries[key] === `number`) {
       sum += salaries[key];
        console.log(isNaN(salaries[key]));
       //}
    
   }
    return sum
 }
