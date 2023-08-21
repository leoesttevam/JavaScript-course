const cliente = {
    nome: "André",
    idade: 32,
    cpf: "305.546.000.00",
    email: "andre@gmail.com"
};

console.log(
    `O nome do cliente é ${cliente.nome} 
     e essa pessoa tem ${cliente.idade}`
);

console.log(`Os tres primeiros números do cpf e ${cliente.cpf.substring(0, 3)}`);