import { MissionUtils } from "@woowacourse/mission-utils";
import {
  DUPLICATE_ERROR,
  NOT_NUMBER,
  SHORT_LENGTH,
  LONG_LENGTH,
} from "..MESSAGE.js";
import { TEXT } from "../contants/MESSAGE";

export const CarName = async () => {
  let GET_CAR_NAMES = [];
  const CAR_NAMES =
    awiat.MissionUtils.Console.readLineAsync("TEXT.GET_CAR_NAMES");
  userInputCarNameError(CarName);
};
