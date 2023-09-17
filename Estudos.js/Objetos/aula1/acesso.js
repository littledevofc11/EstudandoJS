//objeto
const cliente = {
    //características
    nome: "André",
    idade: 32,
    cpf: "11123112316",
    email:"andre@dominio.com"
}

console.log(`O nome do cliente é ${cliente.nome} e tem ${cliente.idade} anos`)

//                                                            substring
console.log(`os primeiros 3 digitos do cpf são: ${cliente.cpf.substring(0,3)}`)