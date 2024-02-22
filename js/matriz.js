function criarMatriz() {
    var n = document.getElementById('tamanho').value;
    var matrizDiv = document.getElementById('matriz');
    var letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    matrizDiv.innerHTML = '';

    // Adicionando rótulos de colunas
    var rotuloColuna = document.createElement('span');
    rotuloColuna.textContent = 'A';
    rotuloColuna.classList.add('rotulo-primeira-coluna');
    matrizDiv.appendChild(rotuloColuna);
    for(var k=1; k<n; k++) {
        var letra_colunas = letras.charAt(k);
        var rotuloColuna = document.createElement('span');
        rotuloColuna.textContent = letra_colunas;
        rotuloColuna.classList.add('rotulo-coluna');
        matrizDiv.appendChild(rotuloColuna);
    }
    matrizDiv.appendChild(document.createElement('br'));

    for(var i=0; i<n; i++) {
        //rotulando linhas
        var letra_linhas = letras.charAt(i);
        var rotuloLinha = document.createElement('span');
        rotuloLinha.textContent = letra_linhas;
        matrizDiv.appendChild(rotuloLinha);
        for(var j=0; j<n; j++) {
            var input = document.createElement('input');
            input.type = 'number';
            input.max = 1000;
            input.min = -1000;
            input.classList.add('matriz-input');
            matrizDiv.appendChild(input);
        }
        matrizDiv.appendChild(document.createElement('br'));
    }
}