function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow function com + de 1 linha de instrução
// Hoisting : arrow function se comporta como expressão

const somaNumerosPequenos = (num3, num4) => {
    if(num3 > 10 || num4 > 10) {
        return "Somente numeros de 1 até 10"
    } else {
        return num3 + num4;
    }
}