
function sumSalary(salaries) {
  let sum = 0;
    for (let key in salaries) {
     
      if (isNaN(salaries[key]) || !isFinite(salaries[key])) continue;
       sum += salaries[key];
        console.log(isNaN(salaries[key]));
       
    
   }
    return sum
 }
