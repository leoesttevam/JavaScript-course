const livros = require('./listaLivros');
const menorValor = require('./menorValor');

for(let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual);

    let livrosAtual = livros[atual];
    console.log('Livros atual', atual);
    console.log('Livro atual', livros[atual]);

    let livrosMenorPreco = livros[menor];
    console.log('Livro menor preço', livros[menor]);

    livros[atual] = livrosMenorPreco;
    livros[menor] = livrosAtual;
}

console.log(livros);