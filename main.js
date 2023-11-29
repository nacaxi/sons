function tocaSom(idElemento){
    document.querySelector(idElemento).play();
}

const listadeTeclas = document.querySelectorAll('.tecla')

let contador = 0;

while (contador < listadeTeclas.length){
    const instrumento = listadeTeclas[contador].classList
    console.log(instrumento[1])
    listadeTeclas[contador].onclick = function (){

        tocaSom(`#som_${instrumento[1]}`);
    }

    contador = contador + 1;
}