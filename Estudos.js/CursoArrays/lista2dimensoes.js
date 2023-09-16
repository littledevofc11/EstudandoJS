const alunos = ['Joao', 'Juliana', 'Caio', 'Ana']

const medias = [ 10 , 8 , 7.5 , 9]

//                            junta os 2 arrays
const listaDeAlunosEMedias = [ alunos , medias ]

//                        o [0] indica o primeiro array, e [1] o indice desse array
console.log(`A aluna da posicao 3 da lista de alunos é ${listaDeAlunosEMedias[0][1]}.
 A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}
`)//acessa a media do aluno da lista [1] no indice 1