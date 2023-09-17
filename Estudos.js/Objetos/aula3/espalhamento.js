const cliente = { 
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: [114540121, 4054121341]
}


cliente.enderecos = [ {
        rua: "29 de Julho",
        numero: 37,
        apartamento: true,
        complemento: "ap 32"
} ]

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}

//             espalhamento do array
ligaParaCliente(...cliente.telefone)

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}

console.log(encomenda)