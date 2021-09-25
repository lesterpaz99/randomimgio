import {toggleMessageValue} from "./createImage.js";
const removeImages = () => {
  const imagesList = document.querySelectorAll("div.imageContainer");
  if (imagesList.length !== 0) {
    console.clear();
    imagesList.forEach((image) => image.remove());
    toggleMessageValue();
  }
};
export {removeImages};
