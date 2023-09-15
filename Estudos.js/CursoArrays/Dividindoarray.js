// Array com nomes
const alunos = [
    "Joao",
    "Maria",
    "Vera",
    "Alessandro",
    "Alessandra",
    "Pedro",
    "Enzo",
    "Henrique",
    "Levi",
    "Iasmin",
    "Laura",
    "Ettore",
    "Luiz",
    "Guilherme",
]


//  sala1 recebe   fatiar do zero até a metade do array alunos
const sala1 = alunos.slice( 0, alunos.length / 2)


//entende que quer pegar da metade do array até o fim dele
const sala2 = alunos.slice(alunos.length /2)

console.log(alunos)
console.log(sala1)
console.log(sala2)

//resultado final, separa 14 alunos para 2 salas.... 14/2 = 7 alunos