
// let material= prompt("Digite o material da escada =)");
// let altura = prompt("Digite a quantidade de degraus =)");
//     let lista = (material);
//     for(let linha = 0; linha < altura; linha++){
//       for(let coluna = 0; coluna < lista.length; coluna++){
//         lista.push (" ".repeat(altura - linha) + material.repeat());
//       }
//       console.log(lista);
//     }

    // jeito certo


let material = prompt("Digite o seu material =)");
let altura = prompt ("Digite sua altura");
let escada = "";
  for(let i = 0; i < altura; i ++){
    escada += material;
    console.log(escada);
 }


 var teste = 0;
 var exemplo = 0; //diferente do var e do let é o escopo, o let fica como uma função global e vai existir em todo o programada.

function fazerEscadinha (material, degraus){
  let escada = '';
  for (let i=0; i < degraus; i++){
    escada += material;
    console.log(escada);
  }
}