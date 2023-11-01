function tocaSom(){
    document.querySelector('#som_tecla_chuva').play();
}

const listadeTeclas = document.querySelectorAll('.tecla')

let contador = 0;
while (contador < listadeTeclas.length){
    listadeTeclas[contador].onclick = tocaSomChuva;
    contador = contador + 1;
}

function somaValores(a,b){
    console.log(a + b)
}