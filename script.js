const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

function clock() {
  let now = new Date();
  let hh = now.getHours() * 30;
  let mm = now.getMinutes() * deg;
  let ss = now.getSeconds() * deg;

  hr.style.transform = `rotate(${hh + mm / 12}deg)`;
  mn.style.transform = `rotate(${mm}deg)`;
  sc.style.transform = `rotate(${ss}deg)`;
}

setInterval(clock);
