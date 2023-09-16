const salaJS = [7,8,8,7,10,6.5,4,10,7]
const salaJA = [6,5,8,9,5,6]
const salaPY = [7,3.5,8,9.5]

function calculaMedia(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acc, nota) => {
        return acc + nota;
    }, 0)
    const media = somaDasNotas / notasDaSala.length;

    return media
}

console.log(`A media da sala da sala de JavaScript é ${calculaMedia(salaJS)}`)
console.log(`A media da sala da sala de Java é ${calculaMedia(salaJA)}`)
console.log(`A media da sala da sala de Python é ${calculaMedia(salaPY)}`)