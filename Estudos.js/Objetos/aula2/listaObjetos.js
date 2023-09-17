const cliente = { 
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: [114540121, 4054121341]
}


//cria um array dentro de um objeto com objetos dentro
cliente.enderecos = [ {
        rua: "29 de Julho",
        numero: 37,
        apartamento: true,
        complemento: "ap 32"
} ]

//usa uma funcao dos arrays (push) para devido uso
cliente.enderecos.push({
    rua: "R. Joseph Garibald",
    numero: 4,
    apartamento: false,
    complemento: ""
})


const listaApartamentos = cliente.enderecos.filter((endereco) => {
    endereco.apartamento === true 
})

console.log(listaApartamentos)
