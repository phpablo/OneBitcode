let dinheiroDisponivel = parseFloat(prompt("Digite a quantidade inicial de dinheiro disponível:"));

function mostrarMenu() {
    let opcao = prompt(`
    Dinheiro disponível: R$ ${dinheiroDisponivel.toFixed(2)}
    Escolha uma opção:
    1 - Adicionar dinheiro
    2 - Remover dinheiro
    3 - Sair
    `);

    switch (opcao) {
        case '1':
            adicionarDinheiro();
            break;
        case '2':
            removerDinheiro();
            break;
        case '3':
            alert("Programa encerrado.");
            break;
        default:
            alert("Opção inválida. Por favor, escolha uma opção válida.");
            mostrarMenu();
    }
}

function adicionarDinheiro() {
    let quantidade = parseFloat(prompt("Digite a quantidade de dinheiro a ser adicionada:"));
    if (!isNaN(quantidade) && quantidade > 0) {
        dinheiroDisponivel += quantidade;
        mostrarMenu();
    } else {
        alert("Quantidade inválida. Por favor, digite um valor numérico maior que zero.");
        adicionarDinheiro();
    }
}

function removerDinheiro() {
    let quantidade = parseFloat(prompt("Digite a quantidade de dinheiro a ser removida:"));
    if (!isNaN(quantidade) && quantidade > 0 && quantidade <= dinheiroDisponivel) {
        dinheiroDisponivel -= quantidade;
        mostrarMenu();
    } else {
        alert("Quantidade inválida. Por favor, digite um valor numérico maior que zero e menor ou igual ao dinheiro disponível.");
        removerDinheiro();
    }
}

mostrarMenu();
