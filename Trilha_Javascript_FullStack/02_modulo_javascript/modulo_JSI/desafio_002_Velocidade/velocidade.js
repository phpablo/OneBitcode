let vel1 = parseFloat(prompt('Digite a velocidade do Veículo 01 : '))
let vel2 = parseFloat(prompt('Digite a velocidade do Veículo 02 : '))

if(vel1 > vel2) {
  console.log('Veículo 1 é mais rápido');
}else if(vel2 > vel1) {
  console.log('Veículo 2 é mais rápido');
} else {
  console.log('Os dois possuem a mesma velocidade');
}


