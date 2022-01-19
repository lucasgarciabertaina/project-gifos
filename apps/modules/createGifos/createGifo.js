
import firstStep from "./firstStep.js"
import secondStep from "./secondStep.js"

export default async function () {
  const buttonSteps = document.getElementById("button-steps");
  buttonSteps.addEventListener(("click"), async () => {
    const isFirst = await firstStep();
    if (isFirst) {
      secondStep(isFirst);  
    }

  });
}