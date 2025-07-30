const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

//  Declare array of filenames
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Declare alt text object
const imageAlts = {
  'pic1.jpg': 'Closeup of a blue human eye',
  'pic2.jpg': 'Rock that looks like a wave',
  'pic3.jpg': 'Purple and white pansies',
  'pic4.jpg': 'Section of wall from a pharaoh’s tomb',
  'pic5.jpg': 'Large moth on a leaf'
};

//  Loop through images and generate thumbnails
imageFilenames.forEach(filename => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', images/${filename});
  newImage.setAttribute('alt', imageAlts[filename]);
  thumbBar.appendChild(newImage);
