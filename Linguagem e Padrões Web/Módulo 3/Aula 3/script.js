document.getElementById('paragrafo').innerHTML = 'Usando JavaScript!';

var objeto1 = document.getElementById('paragrafo2');
var n1 = 10;

function funcaoSoma(num1) {
    var x = num1 +3;
    console.log(x);
    return x;
}

// objeto1.innerHTML = funcaoSoma(100);

function funcaoAdicionaTitulo(){
    console.log("Antes do IF da funcaoAdicionaTitulo!");
    if(objeto1.innerText === 'Título criado via JavaScript!'){
        return objeto1.innerHTML = 'Título apagado!';
    }else{
    return objeto1.innerHTML = '<h1>Título criado via JavaScript!</h1>';
    }
}