var affirmations = ['I forgive myself and set myself free.', 'I believe I can be all that I want to be.', 'I am in the process of becoming the best version of myself.']
var mantras = ['Don’t let yesterday take up too much of today.', 'Every day is a second chance.', 'Tell the truth and love everyone.']

var messageResult = document.querySelector('.message-result');
var showResultsButton = document.querySelector('#result-button');

showResultsButton.addEventListener('click', showMessage)

function showMessage() {
  messageResult.innerHTML = ''
  messageResult.innerHTML += `
    <p>${mantras[0]}</p>
  `
}
