//        dados exige de clientes.json
const dados = require("./cliente.json")

console.log(dados)
console.log(typeof dados)

//                           "stringificar"
const clienteEmString = JSON.stringify(dados)

console.log(clienteEmString)
console.log(typeof clienteEmString)

//Adequar string para Objeto
const objetoCliente = JSON.parse(clienteEmString)

console.log(objetoCliente)