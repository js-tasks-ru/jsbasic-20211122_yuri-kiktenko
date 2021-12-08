function showSalary(users, age) {
  let str = "";
  users.forEach((user) => {
    if (user.age <= age) {
      str = str + `\n${user.name}, ${user.balance}`;
    }
  });
  return str.slice(1);
}
