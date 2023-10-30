import { MissionUtils } from "@woowacourse/mission-utils";
import { TEXT } from "../contants/MESSAGE";

export const racingProgressPrint = (carNameArray, countArray, j) => {
  MissionUtils.Console.print(carNameArray[j]);
};

export const finalWinner = async (carNameArray, countArr) => {
  let result = [];
  finalWinnerResultSort(result, carNameArray, countArr);
};
