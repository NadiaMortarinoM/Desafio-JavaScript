
//primero declaro 3 variables con los precios de los boletos
var precio1 = 30;

var precio2 = 50;

var precio3 = 45;

//una variable con el boton calcular para poder llamar al evento con un click.

var btnCalcular = document.getElementById('calcular')

btnCalcular.addEventListener('click', calcular)

//declaro una función que contenga 3 inputs y las llamo con sus id.value para que haga los calculos?

function calcular () {

    var input1 = document.getElementById('pase_dia').value;

    var input2 = document.getElementById('pase_completo').value;

    var input3 = document.getElementById('pase_dosdias').value;

//ponerlas como objetos
var sumaT = ` <p>${input1} boletos pase por dia</p>
<p>${input2} boletos pase todos los días</p>
<p>${input3} boletos pase sábado y domingo</p> `;

//que me imprima la suma de las 3 y el resultado del total que compre:

document.getElementById('lista-productos').innerHTML = sumaT


document.getElementById('suma-total').textContent = `${(input1 *precio1) + (input2 *precio2) + (input3 *precio3) }`;

}
