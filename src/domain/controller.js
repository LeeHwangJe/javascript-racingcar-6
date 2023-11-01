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
