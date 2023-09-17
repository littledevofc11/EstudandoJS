//objeto base
const pessoa = {
    nome: "Luma",
    idade: 29,
    profissao: "Engenheira",
};

//procura o telefone da pessoa ( nao existe )
console.log(pessoa.telefone)

//atribui telefone a pessoa
pessoa.telefone = "11 039231132"

//mostra o telefone recentemente adicionado
console.log(pessoa.telefone)

//reatribui a caracteristica nome do objeto
pessoa.nome = "Luma Silva"

console.log(pessoa)

//deleta a atribuicao idade
delete pessoa.idade

console.log(pessoa)


