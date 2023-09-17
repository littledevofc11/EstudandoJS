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

//                      chaves do objeto
const chavesDoObjeto = Object.keys(cliente)

if(!chavesDoObjeto.includes("enderecos")){
    console.error("é necessario ter um endereco cadastrado.")
}