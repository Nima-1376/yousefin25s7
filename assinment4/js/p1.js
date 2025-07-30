// Setup
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Sample story
function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);
}
  // Replace name if provided
  if (customName.value !== '') {
    newStory = newStory.replaceAll('Bob', customName.value);
  }
  // Unit conversion for UK
  if (document.getElementById("uk").checked) {
    // Convert Fahrenheit to Centigrade
    let temperature = Math.round((94 - 32) * 5 / 9);
    newStory = newStory.replace("94 Fahrenheit", `${temperature} centigrade`);

    // Convert pounds to stone
    let weight = Math.round(300 / 14);
    newStory = newStory.replace("300 pounds", `${weight} stone`);
  }
    story.textContent = newStory;
  story.style.visibility = 'visible';
}
