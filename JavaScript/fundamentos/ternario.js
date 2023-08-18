const idadeMinima = 18;
const idadeCliente = 19;

if(idadeCliente >= 18) {
    console.log("Pode beber bebidads alcolicas");
} else {
    console.log("Só pode beber bebidas não alcolicas");
}

console.log(idadeCliente >= idadeMinima ? "Pode beber bebidads alcolicas" : "Só pode beber bebidas não alcolicas");