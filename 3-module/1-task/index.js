function namify(users) {
  return users
    //.filter(({names}) => names === names)
    .map(({ name }) => name);
}
