let number = parseFloat(prompt('Informe um valor em metros: '));
let converter = parseInt(prompt('Para qual medida você deseja converter?\n 1 - Milimetro\n 2- Centímetro\n 3 - decimetro\n 4 - decâmetro\n 5 - hectômetro\n 6 - quilômetro\n'));

let resultado;

switch(converter) {
  case 1:
    resultado = number * 1000;
    console.log(`Conversão escolhida para milimetros\n Resultado: ${resultado} mm`);
    break;
  
  case 2:
    resultado = number * 100;
    console.log(`Conversão escolhida para centrimetros\n Resultado: ${resultado} cm`);
    break;
  
  case 3:
    resultado = number * 1000;
    console.log(`Conversão escolhida para decimetro\n Resultado: ${resultado} dm`);
    break;
  
  case 4:
    resultado = number / 10;
    console.log(`Conversão escolhida para decametro\n Resultado: ${resultado} dam`);
    break;
  
  case 5:
    resultado = number / 100;
    console.log(`Conversão escolhida para hectometro\n Resultado: ${resultado} hm`);
    break;
  
  case 6:
    resultado = number / 1000;
    console.log(`Conversão escolhida para quilometro\n Resultado: ${resultado} km`);
    break;
  
  default:
    console.log(`Opção Inválida`);

}