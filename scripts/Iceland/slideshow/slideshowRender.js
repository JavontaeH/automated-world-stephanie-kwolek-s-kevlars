import { formatSlideshow } from "./formatSlideshow.js";
import { getArr } from "./imageArr.js";

export const slideshowRender = () => {
  const contentElement = document.querySelector(".slideshow-section");
  const arr = getArr();

  let renderArr = `<div class="slideshow-container"><h2> Iceland </h2>`;

  for (const image of arr) {
    renderArr += formatSlideshow(image);
  }

  contentElement.innerHTML += `${renderArr}
    </div>
    `;
};
