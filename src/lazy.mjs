import {
	getImagesCreated,
	getLoadedImages,
	increaseNumberOfLoadedImages,
} from './report.mjs';

const isIntersecting = (entry) => {
	return entry.isIntersecting;
};

const loadImage = (entry) => {
	increaseNumberOfLoadedImages();
	const container = entry.target;
	const skeleton = container.firstChild;
	const image = skeleton.firstChild;
	const url = image.dataset.src;
	image.src = url;
	observer.unobserve(container);

	console.log(`Images created: ${getImagesCreated()}
	Loaded Images: ${getLoadedImages()}`);
};

const options = {
	rootMargin: '0px 0px 500px 0px',
};

const observer = new IntersectionObserver((entries) => {
	entries.filter(isIntersecting).forEach(loadImage);
}, options);

const registerImage = (image) => {
	observer.observe(image);
};

export { registerImage };
