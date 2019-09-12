let filmes = ['Star Wars', 'Shazam', 'Star Trek', 'Sharknado', 'Bacurau'];
let i = 0;
while (i<filmes.length){ 
    console.log(filmes[i]);
    i++; ; //incremento
}

// for(inicio;filmes;passo;){
//     codigo a ser executado caso seja verdade!
// }

for (let j = 0; j < filmes.length; j++){ // for é mais comum
    console.log(filmes[j]);
}

// for ir

console.log('for in');      // cria uma variavel com as posições dos filmes
for (let indice in filmes){
    console.log(filmes[indice]);
}

//for of

console.log('for of');
for(let filme of filmes){
    console.log(filme);
}
