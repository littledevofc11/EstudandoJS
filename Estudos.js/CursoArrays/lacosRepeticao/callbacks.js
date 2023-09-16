const nomes = ["Evaldo", "Mari", "Camis"]

//varios métodos para callbacks

//interno anonimo
nomes.forEach(function(nome){
    console.log(nome)
})
console.log("")

// interno de flecha
nomes.forEach((nome) =>{
    console.log(nome)
})
console.log("")

//
function imprimeNome(nome) {
    console.log(nome)
}

console.log("")

nomes.forEach(imprimeNome)