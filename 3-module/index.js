function namify(users) {
    // ваш код...
    return users
      //.filter(({names}) => names === names)
      .map(({ name }) => name);
  }