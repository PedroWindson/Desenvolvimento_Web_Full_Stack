document.getElementById('paragrafo').innerHTML = 'Usando JavaScript!';

var objeto1 = document.getElementById('paragrafo2');
var n1 = 10;

function funcaoSoma(num1) {
    var x = num1 +3;
    return x;
}

objeto1.innerHTML = funcaoSoma(100);