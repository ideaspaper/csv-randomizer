let inputField = document.getElementById('input-field');
let inputButton = document.getElementById('input-button');
let outputField = document.getElementById('output-field');

let outputItems = [];

inputButton.addEventListener('click', parseInputField);

function parseInputField() {
  let striped = inputField.value.replace(/\s/g, '');
  striped = striped.replace(/,/g,'');

  if (striped) {
    outputItems = inputField.value.split(',');
    let mappedOutputItems = outputItems.map((element) => {
      return element.replace(/\s/g, '');
    });
    let filteredOutputItems = [];
    outputItems.forEach((element, index) => {
      if (mappedOutputItems[index]) {
        filteredOutputItems.push(element);
      }
    });
    if (filteredOutputItems.length < 2) {
      replaceOutputItems('No magic needed. You already know the answer.');
    } else {
      outputItems = shuffle(filteredOutputItems)
    generateOutputItems();
    }
  } else {
    replaceOutputItems('Low on mana, cannot cast magic!');
  }
}

function replaceOutputItems(text) {
  outputField.innerHTML = '';
  outputField.innerHTML = `${text}`;
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