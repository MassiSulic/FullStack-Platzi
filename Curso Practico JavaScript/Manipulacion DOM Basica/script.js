const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = "Patito <br> Feo";
h1.innerText = "Patito <br> Feo";
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');

input.value = "456"

const img = document.createElement('img')
img.setAttribute('src', 'https://static.platzi.com/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png')
console.log(img)
pid.innerHTML = "";
pid.append(img);
