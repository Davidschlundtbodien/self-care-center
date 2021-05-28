var affirmations = ['I forgive myself and set myself free.', 'I believe I can be all that I want to be.', 'I am in the process of becoming the best version of myself.']
var mantras = ['Don’t let yesterday take up too much of today.', 'Every day is a second chance.', 'Tell the truth and love everyone.']

var messageResult = document.querySelector('.message-result');
var showResultsButton = document.querySelector('#result-button');


showResultsButton.addEventListener('click', showMessage)

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

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
