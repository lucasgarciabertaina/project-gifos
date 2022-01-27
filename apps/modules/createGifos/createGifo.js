
import firstStep from "./firstStep.js"
import secondStep from "./secondStep.js"

export default async function () {
  const button = document.getElementById("first-step");
  button.addEventListener(("click"), async () => {
    const isFirst = await firstStep();
    if (isFirst) {
      secondStep(isFirst);
    }

  });
}