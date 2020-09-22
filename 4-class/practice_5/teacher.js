// TODO 20: 在这里写实现代码
import Person from './person';

export default class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    // const result = super.introduce();
    // if (this.klass == null || this.klass === '')
    //   return result.concat(` I am a Teacher. I teach No Class.`);
    // return result.concat(` I am a Teacher. I teach Class ${this.klass}.`);
    return `${super.introduce()} I am a Teacher. I teach ${
      this.klass ? `Class ${this.klass}.` : `No Class.`
    }`;
  }
}
