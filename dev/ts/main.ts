import conveyer from "./animation/conveyer/conveyer";
import opening from "./animation/opening/opening";

document.addEventListener("DOMContentLoaded", async () => {
  await opening();
  await conveyer();
});
