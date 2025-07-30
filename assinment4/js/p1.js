// Setup
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Sample story
function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}