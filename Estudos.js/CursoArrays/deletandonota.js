// array inicial
const notas = [ 10 , 6 , 8, 5.5, 10 ]

// Tira o ultimo elemento do array
notas.pop()

//mostra a array notas
console.log(notas)


// calcula a media das notas
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

//mostra a media com frase decorada
console.log(`A média é ${media}.`)