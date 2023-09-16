const alunos = ['Joao', 'Juliana', 'Caio', 'Ana']

const medias = [ 10 , 8 , 7.5 , 9]

const listaDeAlunosEMedias = [ alunos , medias ]

function exibeNota(aluno){
    // verifica se aluno está incluso na listaDeAlunosEMedias
    if(listaDeAlunosEMedias[0].includes(aluno)){
        console.log(`O aluno está cadastrado`)

        //const alunos = listaDeAlunosEMedias[0]     const medias = listaDeAlunosEMedias[1]
        
        // faz a mesma coisa das declaracoes acima
        const [alunos, medias] = listaDeAlunosEMedias

        //                                  retorna o indice
        const indice = alunos.indexOf(aluno)

        const mediaDoAluno = medias[indice]

        console.log(`A média de ${aluno} é ${mediaDoAluno}.`)

    }else{
        console.log(`O aluno não está cadastrado`)
    }
}

exibeNota("Ana")

