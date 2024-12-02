import conveyer from "./animation/conveyer/conveyer";
import Factory from "./animation/conveyer/factory/Factory";
import opening from "./animation/opening/opening";

document.addEventListener("DOMContentLoaded", async () => {
  const factory: Factory = new Factory();
  factory.factory(20);
  // await opening();
  await conveyer();
});
