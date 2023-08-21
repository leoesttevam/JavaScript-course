const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@gmail.com",
    telefone: ["1195874526", "1198547854"],
};

cliente.enderecos = [{
    rua: "Rua Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 937",
 },
];


cliente.enderecos.push({
    rua: "Rua Joseph Ladder",
    numero: 245,
    apartamento: false,
});

const listaApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApartamentos);