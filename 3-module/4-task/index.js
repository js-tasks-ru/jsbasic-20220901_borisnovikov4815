function showSalary(users, age)
{
  let obj = '';
  
  for (let i of users)
  { 
   //  console.log(i[`age`]); // перебираем объекты и выводим их возраст в консоль
    if (i[`age`] <= age)
    {   // если возраст в свойстве 'age' <= возрасту в аргументе функции
      obj += (`${i[`name`]}, ${i[`balance`]}\n`); 
 // console.log(obj)     // то выводим 'name' и 'balance' этих объектов в консоль  
    }
  }
  return obj.trim()
}
