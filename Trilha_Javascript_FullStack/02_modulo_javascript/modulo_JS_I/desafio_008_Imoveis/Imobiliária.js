const imoveis = []
let opcao = ''

do {

  opcao = prompt(
    'Bem-Vindo ao Cadastro de Imóveis!\n' +
    'Total de imóveis: ' + imoveis.length + 
    '\n\n Escolha uma opção:\n 1 - Novo Imóvel\n 2 - Listar imóveis\n 3 - Sair'
  )

  switch(opcao) {
    case '1':
      const imovel = {}

      imovel.proprietario = prompt('Informe o nome do proprietário do imóvel: ')
      imovel.quartos = prompt('Quantos quartos possui o imóvel: ')
      imovel.banheiros = prompt('Quantos banheiros possui o imóvel: ')
      imovel.garagem = prompt('Esse imóvel possui uma garagem ? (Sim/Não)')

      const confirmacao = confirm(
        'Salvar este imóvel? \n' +
        'Proprietário: ' + imovel.proprietario +
        '\nQuartos: ' + imovel.quartos +
        '\nBanheiros: ' + imovel.banheiros +
        '\nPossui garagem: ' + imovel.garagem
      )

      if(confirmacao) {
        imoveis.push(imovel)
        alert('Imovel salvo com sucesso')
      }else {
        alert('Voltando ao menu')
      }
      break
    case '2':
      for(let i = 0; i < imoveis.length; i++) {
        alert(
          'Imovel: ' + (i + 1) +
          'Proprietário: ' + imoveis[i].proprietario +
          '\nQuartos:' + imoveis[i].quartos +
          '\nBanheiros' + imoveis[i].banheiros +
          '\nPossui Garagem: ' + imoveis[i].garagem
        )
      }
      break
    case '3':
      alert('Saindo...')
      break
    default:
      alert('Opção Inválida!')
      break
  }
} while (opcao !== "3")