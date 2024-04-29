/*Procurando Palíndromos
Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda.*/

let word = prompt('Digite uma palavra: ')
let wordReverse = ''

// jogo
for(let i = word.length - 1; i >=0 ; i--) {
  wordReverse += word[i]
}

if (word === wordReverse) {
    alert(word + ' é um palíndromo')
} else {
  alert(word + ' não é um palíndromo\n \n' + word + ' é diferente de ' + wordReverse)
}