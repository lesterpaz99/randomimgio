import { toggleMessageValue, createImage } from './createImage.mjs';
import { removeImages } from './removeImg.mjs';

toggleMessageValue();

const fetchImageBtn = document.querySelector('#fetchImageBtn');
fetchImageBtn.addEventListener('click', createImage);

const cleanBtn = document.querySelector('#clean-btn');
cleanBtn.addEventListener('click', removeImages);
