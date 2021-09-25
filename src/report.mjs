let imagesCreated = 0;
let loadedImages = 0;

const increaseNumberOfImagesCreated = () => imagesCreated++;
const increaseNumberOfLoadedImages = () => loadedImages++;

const getImagesCreated = () => imagesCreated;
const getLoadedImages = () => loadedImages;

export {
	increaseNumberOfImagesCreated,
	getImagesCreated,
	increaseNumberOfLoadedImages,
	getLoadedImages,
};
