let inputField = document.getElementById('input-field');
let inputButton = document.getElementById('input-button');
let outputField = document.getElementById('output-field');

let outputItems = [];

inputButton.addEventListener('click', parseInputField);

function parseInputField() {
  if (inputField.value) {
    outputItems = inputField.value.split(', ');
    outputItems = shuffle(outputItems)
    generateOutputItems();
  } else {
    clearOutputItems();
  }
}

function clearOutputItems() {
  outputField.innerHTML = '';
  outputField.innerHTML = 'Y U INPUT NO TEXT?';
}

function generateOutputItems() {
  outputField.innerHTML = '';
  outputItems.forEach((element, index) => {
    outputField.innerHTML += createOutputItem(index, element);
  });
}

function createOutputItem(id, text) {
  return `<li class="output-item" id="li-item-${id}">${text}</li>`
}

function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}