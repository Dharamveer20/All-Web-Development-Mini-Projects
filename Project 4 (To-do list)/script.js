'use strict';
// selectors
const addBtn = document.querySelector('.addBtn');
let toDoListInput = document.querySelector('#myInput');
const ul = document.querySelector('#myUL');
// console.log(toDoListInput);

// Adding close list button in every li
const allList = function () {
  [...document.getElementsByTagName('li')].forEach(function (li) {
    const div = document.createElement('span');
    div.classList.add('close');
    div.textContent = '\u00D7';
    li.append(div);
  });
};

const deleteList = function () {
  const allBtnDelete = document.querySelectorAll('.close');
  allBtnDelete.forEach(function (btnDelete) {
    btnDelete.addEventListener('click', function (e) {
      const parent = this.parentElement;
      parent.style.display = 'none';
    });
  });
};

ul.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
    }
  }
  // false
);

addBtn.addEventListener('click', function (e) {
  if (toDoListInput.value) {
    const list = document.createElement('li');
    list.textContent = toDoListInput.value;

    ul.append(list);
    console.log(list);
    // toDoListInput = '';
    // Adding close btn
    allList();

    // deleting list
    deleteList();

    a();
  }
});
