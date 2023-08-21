const dados = require("./cliente.json");
console.log(dados);
console.log();

const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);

const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);