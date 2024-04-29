function menuInterativo() {
  const opcoes = ['Acordar', 'Dormir', 'Tomar café', 'Jogar', 'Encerrar'];

  alert('===============\nMenu Interativo\n===============\nEscolha uma opção:\n1 - Acordar\n2 - Dormir\n3 - Tomar café\n4 - Jogar\n5 - Encerrar');

  let inputUser = parseInt(prompt('Digite uma Opção : '));

  while (inputUser !== 5) {
    if (inputUser >= 1 && inputUser <= 4) {
      alert(`Opção escolhida: ${opcoes[inputUser - 1]}\n`);
    } else {
      alert('Opção inserida inválida');
    }

    inputUser = parseInt(prompt('Digite uma Opção : '));
  }

  alert('Sistema Encerrado!');
}

menuInterativo();



// let inputUser
// function menuInterativo() {
//   alert('===============\nMenu Interativo\n===============\nEscolha 1 opção: \n 1 - Acordar\n 2 - Dormir\n 3 - Tomar café\n 4 - Jogar\n5 - Encerrar')
//   console.log('===============')
//   console.log('Menu Interativo')
//   console.log('===============')
//   console.log('Escolha 1 opção: \n 1 - Acordar\n 2 - Dormir\n 3 - Tomar café\n 4 - Jogar\n5 - Encerrar')
//   inputUser = parseInt(prompt('Digite uma Opção : '))

//   while (inputUser != 5) {

//     switch (inputUser) {
//       case 1:
//         alert('Opção escolhida: Acordar!\n');
//         break;
//       case 2:
//         alert('Opção escolhida: Dormir\n');
//         break;
//       case 3:
//         alert('Opção escolhida: Tomar Café\n');
//         break;
//       case 4:
//         alert('Opção escolhida: Jogar\n');
//         break;
//       case 5:
//         alert('Opção escolhida: Encerrar\n');
//         break;
//       default:
//         alert('Opção Inserida Inválida')
//         break;
//     }
    
//     menuInterativo()
//   }
//   alert('Sistema Encerrado!')
// }

// menuInterativo()