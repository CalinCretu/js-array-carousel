const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
];
const slider = document.querySelector('.image-list');
let currentImage = 0;
console.log(currentImage)

function changeImage(index) {
  let image = slider.querySelector('.hidden:nth-child(1)');
  image.src = images[index];
  image.classList.add('active');
  image.classList.remove('hidden');
  console.log(images[index])
}

for (let i = 0; i < images.length; i++) {
  const img = document.createElement('img');
  img.src = images[i];
  img.classList.add('hidden');
  slider.appendChild(img);
}

let firstImage = slider.querySelector('.hidden:nth-child(1)');
firstImage.classList.remove("hidden");
console.log(firstImage)

const prevButton = document.getElementById('prev-slide');
prevButton.addEventListener('click', function () {
  currentImage--;
  console.log(currentImage)
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  changeImage(currentImage);
});

const nextButton = document.getElementById('next-slide');
nextButton.addEventListener('click', function () {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  changeImage(currentImage);
});

































// const galleryDOMElements = document.querySelector('.image-list');
// let i = 0;
// const currentSrc = images[i]

// let botBtnDOMElement = document.getElementById('next-slide');

// let topBtnDOMElement = document.getElementById('prev-slide');


// // for (let i = 0; i < images.length; i++) {
// //   const currentSrc = images[i]
// const htmlString = `
//   <div class="img">
//     <img src="${currentSrc}">
//   </div>
//   `
// console.log(currentSrc)
// galleryDOMElements.innerHTML += htmlString
// const imgDOMElement = document.querySelector('.img');
// imgDOMElement.classList.add('active')
// for (let i = 0; i < images.length; i++) {
//   botBtnDOMElement.addEventListener('click', function () {
//     if (i = 1) {
//       imgDOMElement.classList.remove('active')
//       console.log(currentSrc)
//     }
//   })
// }









