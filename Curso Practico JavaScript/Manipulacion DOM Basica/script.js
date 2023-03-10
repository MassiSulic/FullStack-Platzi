const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');


// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event) {
//    // console.log({event});
//     event.preventDefault();
//     let sumaInputs = input1.value + input2.value;
//     pResult.innerText = "Resultado: " + sumaInputs;
// };

form.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
    // console.log({event});
    // event.preventDefault();
    let sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
};
