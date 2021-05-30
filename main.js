var affirmationList = document.querySelector('#affirmation-quotes');
var mantraList = document.querySelector('#mantra-quotes');
var messageResult = document.querySelector('.message-result');
var showResultsButton = document.querySelector('#result-button');

window.addEventListener('load', showAllMessages);
showResultsButton.addEventListener('click', showMessage);

function showMessage() {
  var message = chooseOption()
  messageResult.innerHTML = ''
  messageResult.innerHTML += `
    <p>${message}</p>
  `
}

function chooseOption() {
  var choice = getRadioValue()

  if(choice === 'affirmation') {
    return affirmations[getRandomIndex(affirmations)]
  } else if (choice === 'mantra') {
    return mantras[getRandomIndex(mantras)]
  } else {
    return 'Choose the type of message you would like to see.'
  }
}

function getRadioValue() {
  var options = document.getElementsByName('option');

  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      return options[i].value
    }
  }
}

function showAllMessages() {
  formList(affirmations, affirmationList);
  formList(mantras, mantraList);
}

function formList(array, element) {
  for (var i = 0; i < array.length; i++) {
    element.innerHTML += `
      <li>${array[i]}</li>
    `
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
