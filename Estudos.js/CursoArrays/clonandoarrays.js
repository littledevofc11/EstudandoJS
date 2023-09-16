const notas = [7,7,8,9]

//spread operator = pega todo o conteudo do outro array e transfere para o outro e push 10
const novasNotas = [...notas, 10];

console.log(`As notas originais sao ${notas} `)
console.log(`As notas novas sao ${novasNotas} `)