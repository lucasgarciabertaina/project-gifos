
import firstStep from "./firstStep.js"
import secondStep from "./secondStep.js"

export default async function () {
  const buttonStart = document.getElementById("button-steps");
  buttonStart.addEventListener(("click"), async () => {
    const isFirst = await firstStep();
    if (isFirst) {
      secondStep(isFirst)
    }

  });
}