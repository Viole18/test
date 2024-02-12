let square = document.getElementById('box');
let btnR = document.getElementById('btnR');
let btnL = document.getElementById('btnL');

btnR.addEventListener('click', ()=> {
    square.classList.add('right');
    square.classList.remove('left');
}, )

btnL.addEventListener('click', ()=> {
    square.classList.add('left');
    square.classList.remove('right');
})