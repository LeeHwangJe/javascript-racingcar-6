import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "./contants/message";
import CONDITION from "./contants/condition";

class App {
  #cars = new Map();

  #numberOfTimes = 0;

  get cars() {
    return this.#cars;
  }

  set cars(info) {
    this.#cars = info;
  }

  get numberOfTimes() {
    return this.#numberOfTimes;
  }

  set numberOfTimes(number) {
    this.#numberOfTimes = number;
  }

  async play() {}
}

export default App;
