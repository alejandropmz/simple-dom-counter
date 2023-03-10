
const number = document.getElementById('number');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');


let counter = 0;

increase.addEventListener('click', () => {
  counter++
  number.innerHTML = counter
})

reset.addEventListener('click', () => {
  counter = 0;
  number.innerHTML = counter
})

decrease.addEventListener('click', () => {
  counter--
  number.innerHTML = counter
})