//objeto
const cliente = {
    //características
    nome: "André",
    idade: 32,
    cpf: "11123112316",
    email:"andre@dominio.com"
}


const chaves = ["nome", "idade", "cpf", "email"]

chaves.forEach ( (chave) => {
    console.log(`A chave ${chave} tem valor ${cliente.chave }`)
})
