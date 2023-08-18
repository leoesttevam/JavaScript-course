//var
/*
    Variáveis de var podem ser atualizadas e declaradas novamente dentro
    de seu escopo (região do código). 
    Esse tipo de variável existe desde o começo na linguagem JavaScript.
 */

//var altura = 5;
//var comprimento = 7;

//var area = altura * comprimento;
//console.log(area);

// let
// As variáveis de let podem ser atualizadas, mas não podem ser declaradas novamente.
let forma = 'retângulo';
let altura2 = 5;
let comprimento2 = 7;

altura2 = 9;

let area2;

if(forma === 'retângulo') {
    area2 = altura2 * comprimento2;
} else {
    area2 = (altura2 * comprimento2) / 2;
}

console.log(area2);

// const
/*
    As variáveis de const não podem ser atualizadas nem declaradas novamente 
    (são utilizadas para valores constantes, como o valor de pi, por exemplo).
*/

const formas = 'quadrado';
const altura = 5;
const comprimento = 7;
let area;

if(forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);