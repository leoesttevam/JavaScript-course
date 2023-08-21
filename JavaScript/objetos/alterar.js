const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
};

console.log(pessoa.nome);

console.log(pessoa.profissao);

pessoa.telefone = "11 222345678542";

console.log(pessoa.telefone);

console.log(pessoa);

const novaPessoa = {
    nome: "Pedro",
};

pessoa = novaPessoa;

console.log(pessoa.nome)