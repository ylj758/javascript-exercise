export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const find = collection.find(person => 2020 - person.age > 2000);
  return find.name;
}
