import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const images = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML('beforeend', images);

function createGalleryItems(items) {
  return items
  .map(({preview, original, description}) => {
    return `
      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
      </a>
      </div>`
  }).join("")
};

 new SimpleLightbox('.gallery a', {captionDelay: 250});
