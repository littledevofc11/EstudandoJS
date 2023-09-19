const livros = require('./listaLivros')
const menorValor = require('./menorValor')

for(let atual = 0; atual < livros.length - 1; atual++){
    let menor = menorValor(livros, atual)

    let livroAtual = livros[atual]
    
    let livroMenorPreco = livros[menor]
    

    livros[atual] = livroAtual
    
    livros[menor] = livroMenorPreco

    console.log("posicao", atual)
    console.log("O livro com menor preco é", livros[menor])
    console.log("O livro com atual é ", livros[atual])

}

console.log(livros)