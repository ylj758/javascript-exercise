export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  return collection.map(element => String.fromCharCode('a'.charCodeAt(0) - 1 + Number(element)));
}
