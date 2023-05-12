// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const list = document.querySelector('ul');
list.style.listStyle = 'none';
const image = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href=${original}>
      <img class="gallery__image" src=${preview} alt=${description} />
   </a>
</li>`;
}).join('');

list.insertAdjacentHTML('afterbegin', image);

new SimpleLightbox('ul a', { captionDelay: 250, captionsData: 'alt', nav: true });

