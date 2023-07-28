// 0) Everthing inside a setInterval

// 1) Create new Date() and save it in a varible
// 2) Save Hour, Mints, sec, in a seperate varible from  new Date()
// 3)  Use setInterval on date after 1000 mili seconds
// 4) textContent of class="clock" to 3)

setInterval(function () {
  const date = new Date();
  const hour = `${date.getHours()}`.padStart(2, 0);
  const mints = `${date.getMinutes()}`.padStart(2, 0);
  const sec = `${date.getSeconds()}`.padStart(2, 0);

  document.querySelector('.clock').textContent = `${hour} : ${mints} : ${sec}`;
}, 1000);
