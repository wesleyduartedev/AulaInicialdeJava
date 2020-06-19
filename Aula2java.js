function minhaFuncao() {
    let numero1 = document.getElementById('numero1');
    let numero1Value = numero1.value;
    numero1Value = Number(numero1Value);


    let numero2;
    numero2 = document.getElementById('numero2'); //'<input id="abc" />' => pega o elmento html
    let numero2Value = numero2.value;
    numero2Value = Number(numero2Value);

    let resultado = document.getElementById('resultado');

    if(numero1Value > numero2Value) {
        resultado.innerHTML = 'O número 1 é maior';
    } else {
        resultado.innerHTML = 'O número 2 é maior';
    }

    event.preventDefault();
}