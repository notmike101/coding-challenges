export default class Person {
  #name = ''; 
  #mouthOpen = false;
  #isDoctor = false;

  constructor(name, isDoctor = false) {
    this.#name = name;
    this.#isDoctor = isDoctor;
  }

  get name() {
    return this.#name;
  }
  get mouthOpen() {
    return this.#mouthOpen;
  }
  get isDoctor() {
    return this.#isDoctor;
  }

  promoteToDoctor() {
    this.#isDoctor = true;
  }

  requestMouthOpen(commander) {
    if (commander.isDoctor || commander === this) {
      this.#openMouth();
    }
  }
  requestMouthClose(commander) {
    if (commander.isDoctor || commander === this) {
      this.#closeMouth();
    }
  }

  #openMouth() {
    this.#mouthOpen = true;
  }
  #closeMouth() {
    this.#mouthOpen = false;
  }
};