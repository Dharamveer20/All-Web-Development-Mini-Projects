const allImg = [...document.querySelectorAll('img')];
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const resetBtn = document.querySelector('button');
// const p = document.querySelector('p');
// console.log(allImg);

// time left
let time = 5;
let ranNumSecLast, ranNumLast;
// let ranNumLast;
// array of random numbers created
let ranNumArr = [];

h1.textContent = `${time} sec left`;

// Setting Interval of 5 sec

const x = function () {
  // time = 0 then stop the timer
  if (time === 1) {
    time--;
    body.style.backgroundColor = 'rgb(238, 203, 203)';
    h1.textContent = `Time Out! Please reset to play the new game`;

    clearInterval(timer);

    // console.log('You lost 0 point');
  } else {
    time--;
    h1.textContent = `${time} sec left`;
  }
  console.log(time);
};
let timer = setInterval(x, 1000);

//  Checking for Winner
const winnerFunction = function (num1, num2) {
  // console.log(num1, num2);

  if (num1 === num2 && typeof num1 === 'number') {
    // console.log('Winner');
    body.style.backgroundColor = 'rgb(64, 206, 75)';

    h1.textContent = `You won with ${time} ${
      time > 1 ? 'secs' : 'sec'
    } in hand!`;

    // Stopping the time
    clearInterval(timer);

    // Removing Event Listener from body
    body.removeEventListener('click', clickImg);
    // .removeEventListener()
  }
};
// console.log(ranNum);

const clickImg = function (e) {
  if (allImg.includes(e.target) && time > 0) {
    // Creating random number between 1 to 3
    const ranNum = Math.ceil((Math.random() * allImg.length) / 2);

    ranNumArr.push(ranNum);

    // Storing last two values in a variable
    ranNumSecLast = ranNumArr[ranNumArr.length - 2];
    ranNumLast = ranNumArr[ranNumArr.length - 1];

    //  Setting the black Img to ran AOT character Img
    e.target.src = `img(${ranNum}).jpg`;

    // //  Checking for Winner
    winnerFunction(ranNumSecLast, ranNumLast);
  }
};

// Adding event Listener to body
body.addEventListener('click', clickImg);

// Reseting the game
resetBtn.addEventListener('click', function () {
  allImg.forEach((img) => {
    img.src = 'img(0).jpg';
  });
  body.style.backgroundColor = 'white';

  time = 5;
  console.log(time);
  // clearInterval(timer);
  timer = setInterval(x, 1000);
});

// const h1 = document.querySelector('h1');

// const h1Handler = function (e) {
//   console.log('Maza aaya');

//   h1.removeEventListener('mouseenter', h1Handler);
// };
// h1.addEventListener('mouseenter', h1Handler);
