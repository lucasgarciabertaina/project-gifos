export default function () {
  const successContainer = document.getElementById("success-container");
  successContainer.setAttribute("class", "success-container")

  const imageLoading = document.getElementById("image-upload");
  imageLoading.setAttribute("class", "success-container__video-image success-container__video-image--loader")

  const textLoading = document.getElementById("text-upload");
  textLoading.setAttribute("class", "success-container__video--loader-text");

  const step2 = document.getElementById("step2");
  step2.setAttribute("class", "steps__step");

  const step3 = document.getElementById("step3");
  step3.setAttribute("class", "steps__step--active");

}