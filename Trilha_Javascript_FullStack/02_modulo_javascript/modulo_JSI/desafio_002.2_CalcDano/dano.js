let name = prompt('Qual nome do seu personagem : ');
let attack = parseFloat(prompt('Qual o poder de ataque dele ? '));

let name2 = prompt('Qual nome do inimigo : ');
let life = parseFloat(prompt('E quantos pontos de vida? '));
let deffense = parseFloat(prompt('Qual o poder de defesa dele ? '));
let shield = prompt('Possui escudo ?\n  1 - Sim \n 2 - Não');

let damageCause;

if(attack > deffense && shield === '2') {
  damageCause = attack - deffense;
} else if (attack > deffense && shield === '1') {
  damageCause = (attack - deffense) / 2;
} else if (attack <= deffense) {
damageCause = 0;
}

if(shield === '1' ? 'Sim' : 'Não');

console.log(`
  Personagem 01 \n ======= \n Nome: ${name}\n
  Poder de Ataque: ${attack} pontos\n==========\n
  Personagem 02\n ========\n Nome: ${name2}\n
  Poder de Defesa: ${deffense}\n
  Possui Escudo ? ${shield}\n
  Vida total: ${life}\n
  Dano Recebido: ${damageCause}\n
  Vida atual: ${life - damageCause};
`)


