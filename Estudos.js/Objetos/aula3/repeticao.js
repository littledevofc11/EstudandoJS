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

for(let chave in cliente) {
    //         tipo de
    let tipo = typeof cliente[chave]
    if(tipo !== "object" && tipo !== "function"){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
    }
}
