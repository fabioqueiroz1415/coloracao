function escolherOpcao() {
    var opcao = document.getElementById('opcoes').value;
    switch(opcao) {
        case 'Coloração':
            window.location.href = 'https://fabioqueiroz1415.github.io/coloracao/coloracao.html';
            break;
        case 'Harmônica':
            window.location.href = 'https://fabioqueiroz1415.github.io/coloracao/harmonica.html';
            break;
        case 'Completa':
            window.location.href = 'https://fabioqueiroz1415.github.io/coloracao/completa.html';
            break;
        default:
            console.error('Opção inválida!!');
            break
    }
}