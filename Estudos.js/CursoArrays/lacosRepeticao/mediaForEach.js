const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0;

//método de repeticao com uma funcao que é chamada para cada elemento do array
//funcao de callback = chamar de volta
notas.forEach(function(nota){
    somaDasNotas += nota;
})

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`)