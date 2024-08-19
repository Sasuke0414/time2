const hour = document.querySelector("#hour");
const minut = document.querySelector("#minut");
const second = document.querySelector("#second");

const date = document.querySelector('#date')
const month = document.querySelector('#month')
const year = document.querySelector('#year')

function clock() {
  const hozirgiVaqt = new Date();

  let hr = hozirgiVaqt.getHours();
  let mn = hozirgiVaqt.getMinutes();
  let sd = hozirgiVaqt.getSeconds();

  let dt = hozirgiVaqt.getDate();
  let mt = hozirgiVaqt.getMonth();
  let yr = hozirgiVaqt.getFullYear();

  hour.textContent = hr < 10 ? "0" + hr : hr;
  minut.textContent = mn < 10 ? "0" + mn : mn;
  second.textContent = sd < 10 ? "0" + sd : sd;

  date.textContent = dt < 10 ? "0" + dt : dt;
  month.textContent = mt < 10 ? "0" + mt : mt;
  year.textContent = yr < 10 ? "0" + yr : yr;

}

clock();

setInterval(clock, 1000);


