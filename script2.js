let filmes = [
    {titulo: "Star Wars - uma nova esperança", classificacao: 16},
    {titulo: "Procurando nemo", classificacao: 0},
    {titulo: "A rede social", classificacao: 18},
    {titulo: "Toy Story", classificacao: 0},
    {titulo: "Senhor dos Aneis", classificacao: 12},
    {titulo: "Rei Leão", classificacao: 0},
    {titulo: "Hunger Games", classificacao: 0},
    {titulo: "Vingadores - Ultimato", classificacao: 16},
    {titulo: "Homem aranha - de volta ao lar", classificacao: 12},
    {titulo: "Dragon Ball Z - Broly", classificacao: 16}
];

let idade = Number(prompt('Digite sua idade: '));
        while(idade < 0 ||  idade >= 100  || isNaN(idade)){
            alert("Idade Inválida. Por favor DIGITE");
            idade = Number(prompt("Qual a sua idade: "));
        }

for (let filme of filmes){
    if(idade >= filme.classificacao){
        console.log(filme.titulo);
    }
}