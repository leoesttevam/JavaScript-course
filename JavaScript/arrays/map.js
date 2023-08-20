const notas = [10, 9.5, 8, 7, 6];

// map e ultilizado para reescrever arrays
const notasAtualizada = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizada);