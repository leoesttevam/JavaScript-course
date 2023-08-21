const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@gmail.com",
    telefone: ["1195874526", "1198547854"],
};

cliente.enderecos = [
    {
        rua: "Rua Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 937",
    },
];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. é necessario ter um endereço cadastrado");
}