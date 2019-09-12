var teste = 0;
var exemplo = 0; //diferente do var e do let é o escopo, o let fica como uma função global e vai existir em todo o programada.

function fazerEscadinha (material, degraus){
 let escada = '';
 for (let i=0; i < degraus; i++){
   escada += material;
   console.log(escada);
 }
}

const subtrair = function(n1, n2){
 return n1 - n2;
}

const gerarAleatorio = (min, max) => {
    return Math.floor(Math.random()*(min - max +1)) + min;
}