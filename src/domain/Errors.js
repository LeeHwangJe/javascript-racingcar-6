import { ERROR_MESSAGE } from "../contants/MESSAGE";

export const userInputDuplicatedError = (carNameArray) => {
  for (let i = 0; i < carNameArray.length - 1; i++) {
    if (carNameArray[i] === carNameArray[i + 1]) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_ERROR);
    }
  }
};

export const userInputCarNameLengthError = (carNameArray) => {
  for (let i = 0; i < carNameArray.length; i++) {
    if (carNameArray[i].length > 5) {
      throw new Error(ERROR_MESSAGE.LONG_LENGTH);
    }
  }
};

export const userInputTryNumberError = (tryNumber) => {
  if (tryNumber <= 0) {
    throw new Error(ERROR_MESSAGE.WRONG_TYPE);
  } elif (tryNumber %1 !==0 || isNaN(tryNumber)) {
    throw new Error(ERROR_MESSAGE.WRONG_TYPE)
  }
};
