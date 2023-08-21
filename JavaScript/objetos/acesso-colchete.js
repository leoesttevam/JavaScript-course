const cliente = {
    nome: "André",
    idade: 32,
    cpf: "305.546.000.00",
    email: "andre@gmail.com"
};

console.log(
    `O nome do cliente é ${cliente["nome"]} 
     e essa pessoa tem ${cliente["idade"]}`
);

console.log(`Os tres primeiros números do cpf e ${cliente["cpf"].substring(0, 3)}`);
console.log();

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});

const pet = {
    nome: "Rex",
    dataDeNascimento: "12/03/2017",
    brinquedoFavorito: "bolinha",
    cor: "cinza",
  };