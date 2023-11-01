import { MissionUtils } from "@woowacourse/mission-utils";

export const makeRandomNumberJudge = async (tryNumber) => {
  const RANDOM_NUMBER_ARRAY = [];
  for (let i = 0; i < tryNumber; i++) {
    const NUMBER = await MissionUtils.Random.pickNumberInRange(0, 9);
    NUMBER >= 4
      ? RANDOM_NUMBER_ARRAY.push(NUMBER)
      : RANDOM_NUMBER_ARRAY.push(0);
  }
  return RANDOM_NUMBER_ARRAY;
};

export const makeRandomNumberJudgeTest = async (input) => {
  input >= 4 ? "go" : "stop";
};

export const makeEmptyArray = (carNamesArray, array) => {
  for (let i = 0; i < carNamesArray.length; i++) {
    array.push([]);
  }
};

export const resultjudge = (result, countArr, i, j) => {
  if (result[j][i] != 0) {
    countArr[j].push("-");
  }
};

export const finalWinnerResultAndSort = (result, carNamesArray, countArr) => {
  for (let i = 0; i < carNamesArray.length; i++) {
    result.push([carNamesArray[i], countArr[i]]);
  }
  return (result = result.sort((a, b) => b[1] - a[1]));
};
