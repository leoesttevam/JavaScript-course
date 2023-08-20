const nomes = ["Evaldo", "Mari", "Camis"];

nomes.forEach(function(nome) {
    console.log(nome);
});

// Função arrow function
nomes.forEach((nome) => {
    console.log(nome);
});

function imprimirNomes(nome) {
    console.log(nome);
}

nomes.forEach(imprimirNomes);