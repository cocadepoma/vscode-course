/**
  **     Tips: Ctrl + Shift + P
  **           type @
 */

export class SuperHero {
  name   : string = '';
  power  : string = '';
  age    : number = 0;
  hobbies: string[] = [];

  private _secretName: string = '';

  constructor() { }

  usePower() {}
  fly() {}
  run() {}
  walk() {}
  fight() {}

  set secretName(value: string) {
    this._secretName = value;
  }

  get secretName() {
    return this._secretName;
  }
}