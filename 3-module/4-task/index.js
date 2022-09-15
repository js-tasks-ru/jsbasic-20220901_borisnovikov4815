function showSalary(users, age)
{
  let obj = '';
  obj = users
    .filter(item => item.age <= age)
    .map(item => item.name + `, ` + item.balance).join(`\n`);
  return obj
 }
