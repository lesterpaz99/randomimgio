import { toggleMessageValue, createImage } from './createImage.js';
import { removeImages } from './removeImg.js';

toggleMessageValue();

const fetchImageBtn = document.querySelector('#fetchImageBtn');
fetchImageBtn.addEventListener('click', createImage);

const cleanBtn = document.querySelector('#clean-btn');
cleanBtn.addEventListener('click', removeImages);
