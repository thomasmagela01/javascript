let num = [5, 8, 2, 9, 3]
num[5] = 6 // Adicione o valor 6 na posição 5
num.push(1) // Adicione o valor 1 na ultima posição
num.sort() // Coloca em ordem crescente 
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9) 
// Caso tenho o número ele vai mostrar em qual posição ele esta, senão ele vai retornar o valor -1
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 9 está na posição ${pos}`)
}