import MESSAGE from "../contants/message";

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
  static getNumberOfTimes(answer) {
    const number = Number(answer);
    if (Number.parseInt(number) && number > 0) {
      return number;
    }
    throw new Error(MESSAGE.error.numberOfTimes);
  }
}

export default Validation;
