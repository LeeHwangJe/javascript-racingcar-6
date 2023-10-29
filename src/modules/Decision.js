import { Random } from "@woowacourse/mission-utils";
import CONDITION from "../contants/condition";

class Decition {
  static moveFoward() {
    const random = Random.pickNumberInRange(
      CONDITION.rangeStart,
      CONDITION.rangeEnd
    );
    return random >= CONDITION.movingFoward;
  }
}

export default Decition;
