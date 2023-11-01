import { MissionUtils } from "@woowacourse/mission-utils";
import { TEXT } from "../contants/MESSAGE";
import { howManyFirstCars, makeWinnerArray } from "./controller";
import(howManyFirstCars);

export const racingProgressPrint = (carNamesArray, countArr, j) => {
  MissionUtils.Console.print(
    carNamesArray[j] + " : " + countArr[j].join("").trim()
  );
};
