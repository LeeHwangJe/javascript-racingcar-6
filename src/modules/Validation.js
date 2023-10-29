import MESSAGE from "../contants/message";
import CONDITION from "../contants/condition";

class Validation {
  static getNumberOfCar(answer, limitLength) {
    const info = new Map();
    answer.split(",").forEach((str) => {
      if (str.length === 0 || str.length > limitLength) {
        throw new Erorr(MESSAGE.error.carName);
      } else if (info.has(str)) {
        throw new Error(MESSAGE.error.duplicateName);
      } else {
        info.set(str, 0);
      }
    });
    return info;
  }
}
