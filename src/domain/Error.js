import { ERROR } from "../contants/contants";

export const userInputDuplicatedError = (carNameArray) => {
  for (leti = 0; i < carNameArray.length - 1; i++) {
    if (carNameArray[1] === carNameArray[i + 1]) {
      throw new Error(ERROR.ERROR_DUPLICATED);
    }
  }
};