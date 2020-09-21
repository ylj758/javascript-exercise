export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  const collectionFilter = collection.filter(str => str.startsWith('粤A'));
  return collectionFilter.length;
}
