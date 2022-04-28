import { galleryItems } from './gallery-items.js';
// Change code below this line
let galleryPage = "";

const galleryItemsContainer = {
  galleryEl: document.querySelector(".gallery"),
};

galleryItems.forEach(({ preview, original, description }) => {
  galleryPage += `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
});

addGalleryPage(galleryPage);

function addGalleryPage(markup) {
  galleryItemsContainer.galleryEl.insertAdjacentHTML("beforeend", markup);
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
