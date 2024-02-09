let btn = document.querySelector('.btn');
let input = document.querySelector('.input');
let lenPara = document.querySelector('.length-para');
let volPara = document.querySelector('.volume-para');
let masPara = document.querySelector('.mass-para');

btn.addEventListener('click', function (e) {
   
    let lengthMeter = (input.value * 3.281);
    let lengthFeet = input.value * 0.305;
    lenPara.innerHTML = `${input.value} Meter = ${lengthMeter.toFixed(3)} Feet | ${input.value} Feet = ${lengthFeet.toFixed(3)} Meter `;
 
    let volumeLiter = input.value * 0.264;
    let volumeGallon = input.value * 3.785;
    volPara.innerHTML = `${input.value} Liter = ${volumeLiter.toFixed(3)} Gallon | ${input.value} Gallon = ${volumeGallon.toFixed(3)} Liter `;

    let massKilo = input.value * 2.205;
    let massPounds = input.value * 0.454;
    masPara.innerHTML = `${input.value} Kilo Gram = ${massKilo.toFixed(3)} Pounds | ${input.value} Pounds = ${massPounds.toFixed(3)} Kilo Gram `;
});
