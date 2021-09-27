import { toggleMessageValue, createImage } from './createImage.mjs';
import { removeImages } from './removeImg.mjs';

toggleMessageValue();

const fetchImageBtn = document.querySelector('#fetch-image');
const loadNewImageBtn = document.querySelector('#load-new-image');
const buttons = document.querySelector('#buttons');

fetchImageBtn.addEventListener('click', createImage);
loadNewImageBtn.addEventListener('click', createImage);

const cleanBtn = document.querySelector('#clean-btn');
cleanBtn.addEventListener('click', removeImages);

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			buttons.classList.add('hidden');
			return;
		}
		buttons.classList.remove('hidden');
	});
});

const target = fetchImageBtn;
observer.observe(target);
