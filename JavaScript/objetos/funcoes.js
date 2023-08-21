const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@hmail.com",
    telefone: ["1198526547", "1192547265"],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insulficiente");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    }
};

cliente.efetuaPagamento(170);