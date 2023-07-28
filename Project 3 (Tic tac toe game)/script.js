'use strict';
const main = document.querySelector('#main');
const printWinner = document.querySelector('#print');

const allInputs = [...document.querySelectorAll('.tic')];

// Tic value
let ticValue = 'X';
// Winner Checker Function
const checkWinner = function (threeTicArr) {
  if (
    threeTicArr.every((tic) => tic === 'X') ||
    threeTicArr.every((tic) => tic === 'O')
  ) {
    printWinner.textContent = `Player ${threeTicArr[0]} Won`;

    // Disabling empty Inputs
    // console.log(allInputs);
    allInputs
      .filter((input) => input.value === '')
      .forEach((input) => (input.disabled = true));

    ticValue = '';
  }
};
// 1. Event Delegation on class="main"
main.addEventListener('click', function (e) {
  const gameFunction = function () {
    // checking if e.target has class tic
    if (e.target.classList.contains('tic')) {
      // No change in e.target value if it 'X' or 'O'
      if (e.target.value === 'X' || e.target.value === 'O') return;

      e.target.value = ticValue;

      // all tic values only
      const ticArr = allInputs.map(function (tic) {
        return tic.value;
      });
      // If else condition ends here

      // Checking  winner
      const winner = function () {
        const [b1, b2, b3, b4, b5, b6, b7, b8, b9] = ticArr;

        // checking winner Vertically
        checkWinner([b1, b2, b3]);
        checkWinner([b4, b5, b6]);
        checkWinner([b7, b8, b9]);
        // checking winner Horizontally
        checkWinner([b1, b4, b7]);
        checkWinner([b2, b5, b8]);
        checkWinner([b3, b6, b9]);

        // Checking winner Diagonally
        checkWinner([b1, b5, b9]);
        checkWinner([b3, b5, b7]);
      };
      winner();

      // ticValue  'X' <=> 'O'
      if (!printWinner.textContent) ticValue = ticValue === 'X' ? 'O' : 'X';
    }
  };
  gameFunction();
});

// Resetting the Game
document.querySelector('#but').addEventListener('click', function () {
  allInputs.forEach((input) => (input.value = ''));
  ticValue = 'X';
  printWinner.textContent = '';
});

// A bit of consfusion
let a = document.querySelector('#b1').value;
console.log(`a: ${a}`);
document.querySelector('#b1').value = 10;
console.log(`a: ${a}`);
