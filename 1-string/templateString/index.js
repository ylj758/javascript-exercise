function getScore(id) {
  if (id === '1234') {
    return 60;
  }
  return 59;
}

export default function getScoreOutput(person) {
  // TODO 8: 在这里写实现代码
  const score = getScore(person.id);
  const result = '你好，';
  return result.concat(person.lastName, person.firstName, '！你的考试成绩为', score, '分');
}
