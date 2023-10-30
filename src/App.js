import { getCarName } from "./domain/inputView";

class App {
  async play() {
    await getCarName();
  }
}

export default App;
