function escolherOpcao() {
    console.error("aaaaaaaaaaaaaaaaa");
    var opcao = document.getElementById('opcoes').value;
    switch(opcao) {
        case 'coloracao':
            window.location.href = 'https://fabioqueiroz1415.github.io/coloracao/html/coloracao.html';
            break;
        case 'harmonica':
            window.location.href = 'https://fabioqueiroz1415.github.io/coloracao/html/harmonica.html';
            break;
        case 'completa':
            window.location.href = 'https://fabioqueiroz1415.github.io/coloracao/html/completa.html';
            break;
        default:
            console.error('Opção inválida!!');
            break
    }
}