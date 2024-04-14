let nome = prompt('Digite seu nome :')
let sobrenome = prompt('Digite seu sobrenome: ')
let estudo = prompt('Digite seu campo de estudo: ')
let anoNasc = parseFloat(prompt( 'Digite seu ano de nascimento: '))
let idade = 2024 - anoNasc;

alert(`Nome completo do recruta é : ${nome} ${sobrenome}. Esta atuando na area de estudo de ${estudo} e tem a idade de ${idade} anos`);