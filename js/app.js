const imagesDOMElement = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
];

const galleryDOMElements = document.querySelector('.image-list');
let i = 0;
const currentSrc = imagesDOMElement[0]

let botBtnDOMElement = document.getElementById('next-slide');

let topBtnDOMElement = document.getElementById('prev-slide');


for (let i = 0; i < imagesDOMElement.length; i++) {
  const currentSrc = imagesDOMElement[i]
  const htmlString = `
    <div class="img">
      <img src="${currentSrc}">
    </div>
    `
  galleryDOMElements.innerHTML += htmlString
  let imgDOMElement = document.querySelector('.img');
  imgDOMElement.classList.add('active')
}

botBtnDOMElement.addEventListener('click', function () {
  for (let i = 0; i < imagesDOMElement.length; i++) {
    const currentSrc = imagesDOMElement[i]
    const htmlString = `
      <div class="img">
        <img src="${currentSrc}">
      </div>
      `
    galleryDOMElements.innerHTML += htmlString
    let imgDOMElement = document.querySelector('.img');
    imgDOMElement.classList.add('active')
    console.log(botBtnDOMElement)
  }
})





// botBtnDOMElement.addEventListener('click', function () {
//   imageDOMElement1.classList.remove('active');
//   imageDOMElement2.classList.add('active');
// })

// topBtnDOMElement.addEventListener('click', function () {
//   imageDOMElement1.classList.add('active');
//   imageDOMElement2.classList.remove('active');
// })




// const imageDOMElement = galleryDOMElements[0 + costante
//   const imageDOMElement = galleryDOMElements[1]
//   imageDOMElement.classList.add('active')

//  abbiamo la gallery. quando abbiamo l'elemento 0 della gallery dobbiamo dargli active. if gallerydomelement = 0 diamo active. if gallerydomelement = 1 diamo active e togliamo active a quello prima.