const cliente = { 
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: [114540121, 4054121341]
}

console.log(cliente)

cliente.endereco = {
    rua: "29 de Julho",
    numero: 37,
    apartamento: true,
    complemento: "ap 32"
}

console.log(cliente)

console.log(cliente.endereco)