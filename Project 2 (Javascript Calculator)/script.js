'use strict';
const numDisplay = document.querySelector('.display');
const allButtons = document.querySelectorAll('button');
// console.log(allButtons);

const useCalc = function (calcPress) {
  // Check if calcPress !== '=' and !== 'C'
  if (calcPress !== '=' && calcPress !== 'C') {
    // console.log('l');
    numDisplay.value += calcPress;
  }
  // check if calcPress === '=' and numDisplay.value !== ''
  if (calcPress === '=' && calcPress !== 'C')
    numDisplay.value = eval(numDisplay.value);

  // if calcPress === 'C'
  if (calcPress === 'C') numDisplay.value = '';
};

// Event Delegation on class Calculator
document.querySelector('.calculator').addEventListener('click', function (e) {
  if (e.target.classList.contains('valueInCalc')) useCalc(e.target.value);
});

// Bad pratice
// allButtons.forEach((button) =>
//   button.addEventListener('click', function (e) {
//     useCalc(e.target.value);
//   })
// );

// keydown
// 1. Create Array from all Buttons
const allBtnArr = Array.from(allButtons).map((btn) => btn.textContent);
allBtnArr.push('(', ')');
console.log(allBtnArr);
// 2. Add eventlistner on window
window.addEventListener('keydown', function (e) {
  if (allBtnArr.includes(e.key)) useCalc(e.key);
});
