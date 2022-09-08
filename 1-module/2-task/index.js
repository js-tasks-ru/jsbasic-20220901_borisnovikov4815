/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
 function isValid(name){

  if (name == null) {
      console.log(`namespace is null`);
      return false; 
      
  } else if ( name == ``) {
      console.log(`namespace is empty`);
      return false;
      
  } else if ( name.length < 4) {
      console.log(`name sthorter than 4`);
      return false;
      
  } else if (name.includes(' ')) {
      console.log(`name includes spaces`);
      return false;
       
  }      
      else 
      (console.log(`passed: ${name}`));
      return true ;

}


function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
