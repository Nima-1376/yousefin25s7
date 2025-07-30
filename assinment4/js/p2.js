const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// 1. Declare array of filenames
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// 2. Declare alt text object
const imageAlts = {
  'pic1.jpg': 'Closeup of a blue human eye',
  'pic2.jpg': 'Rock that looks like a wave',
  'pic3.jpg': 'Purple and white pansies',
  'pic4.jpg': 'Section of wall from a pharaoh’s tomb',
  'pic5.jpg': 'Large moth on a leaf'
};