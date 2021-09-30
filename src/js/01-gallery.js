import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
// const SimpleLightbox = require('SimpleLightbox');
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// console.log(galleryItems);
const galleryListNode = document.querySelector('.gallery');
const makeGalleryItemMarkup = ({ preview, original, description }) => {
  return `
    <div>
    <a class="gallery__item" href="${original}">
       <img
         class="gallery__image"
         src="${preview}"
         alt="${description}"
       />
     </a>
     </div>`;
};

const markupGallery = galleryItems.map(makeGalleryItemMarkup).join('');
console.log('markupGallery', markupGallery);
galleryListNode.insertAdjacentHTML('beforeend', markupGallery);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
