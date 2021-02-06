// links
const chrono = "https://www.chrono24.fr/search/index.htm?customerId=27124&dosearch=true";
const ebay = "https://www.ebay.com/str/astieganwatches";
const catawiki = "https://www.catawiki.eu/u/9361575-user-ee0fbaa";
const instagram = "https://www.instagram.com/astieganwatches/";


// CHRONO
const btnChrono = document.querySelector('#bChrono');

btnChrono.addEventListener('click', () => {
  window.open(chrono,'_blank')}
);

// EBAY
const btnEbay = document.querySelector('#bEbay');

btnEbay.addEventListener('click', () => {
  window.open(ebay,'_blank')}
);

// CATAWIKI
const btnCat = document.querySelector('#bCatawiki');

btnCat.addEventListener('click', () => {
  window.open(catawiki,'_blank')}
);

// INSTAGRAM
const btnInst = document.querySelector('#instaButton');

btnInst.addEventListener('click', () => {
  window.open(instagram,'_blank')}
);
