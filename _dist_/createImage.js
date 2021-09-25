import {registerImage} from "./lazy.js";
import {
  increaseNumberOfImagesCreated,
  getImagesCreated,
  getLoadedImages
} from "./report.js";
const rootForImages = document.querySelector("#images");
const message = document.createElement("p");
const addMessage = () => {
  message.className = "mt-4 max-w-2xl text-xl leading-7 text-gray-500 text-center mx-auto";
  message.innerText = "No images have been brought in yet";
  rootForImages.insertAdjacentElement("beforebegin", message);
};
const isRootEmpty = () => rootForImages.childNodes.length === 0;
const toggleMessageValue = () => {
  if (isRootEmpty()) {
    addMessage();
    return;
  }
  message.remove();
};
const max = 122;
const min = 1;
const random = () => Math.floor(Math.random() * (max - min) + min);
const createImage = () => {
  increaseNumberOfImagesCreated();
  console.log(`Images created: ${getImagesCreated()}
	Loaded Images: ${getLoadedImages()}`);
  const container = document.createElement("div");
  container.className = "p-4 imageContainer";
  const skeleton = document.createElement("div");
  skeleton.style.minHeight = "100px";
  skeleton.className = "w-80 h-full rounded-md bg-gray-300 mx-auto";
  const image = document.createElement("img");
  image.width = "320";
  image.className = "rounded-md";
  image.alt = "random from unsplash";
  image.dataset.src = `https://source.unsplash.com/random/${random()}`;
  skeleton.append(image);
  container.append(skeleton);
  rootForImages.append(container);
  registerImage(container);
  toggleMessageValue();
};
export {toggleMessageValue, createImage};
