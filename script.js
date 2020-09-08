let inField = document.getElementById('input-field');
let inButton = document.getElementById('input-button');
let outField = document.getElementById('output-field');

let outItems = [];

inButton.addEventListener('click', parseInField);

function parseInField() {
  let striped = inField.value.replace(/\s/g, '');
  striped = striped.replace(/,/g, '');
  if (striped) {
    outItems = inField.value.split(',');
    let mappedOutputItems = outItems.map((element) => {
      return element.replace(/\s/g, '');
    });
    let filteredOutputItems = [];
    outItems.forEach((element, index) => {
      if (mappedOutputItems[index]) {
        filteredOutputItems.push(element);
      }
    });
    if (filteredOutputItems.length < 2) {
      replaceOutItems('No magic needed. You already know the answer.');
    } else {
      outItems = shuffle(filteredOutputItems)
      generateOutItems();
    }
  } else {
    replaceOutItems('Low on mana, cannot cast magic!');
  }
}

function replaceOutItems(text) {
  outField.innerHTML = '';
  outField.innerHTML = `${text}`;
}

function generateOutItems() {
  outField.innerHTML = '';
  outItems.forEach((element, index) => {
    outField.innerHTML += createOutItem(index, element);
  });
}

function createOutItem(id, text) {
  return `<li class="output-item">${text}</li>`
}

function shuffle(array) {
  let currIndex = array.length;
  let randIndex;
  while (0 !== currIndex) {
    randIndex = Math.floor(Math.random() * currIndex);
    currIndex -= 1;
    [array[currIndex], array[randIndex]] = [array[randIndex], array[currIndex]];
  }
  return array;
}