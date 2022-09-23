function makeFriendsList(friends) {
  let ul = document.createElement('ul');
      document.body.append(ul);
  
      for (lis in friends) {
        let data = `${friends[lis].firstName}  ${friends[lis].lastName}`
        let li = document.createElement('li');
        li.textContent = data;
        ul.append(li);
      }
  return ul
  };