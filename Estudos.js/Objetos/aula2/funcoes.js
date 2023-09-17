const cliente = { 
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: [114540121, 4054121341],
    saldo: 200,

    efetuaPagamento: function(valor){
        //valor > isso(cliente).saldo
        if(valor > this.saldo) {
            console.log("Saldo Insuficiente")
        }else{
            //saldo antigo - valor da nova conta
            this.saldo -= valor
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`)
        }
    }
}

cliente.efetuaPagamento(25)

