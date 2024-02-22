function criarMatriz() {
    var n = document.getElementById('tamanho').value;
    var matrizDiv = document.getElementById('matriz');
    matrizDiv.innerHTML = '';
    for(var i=0; i<n; i++) {
        for(var j=0; j<n; j++) {
            var input = document.createElement('input');
            input.type = 'text';
            input.classList.add('matriz-input');
            matrizDiv.appendChild(input);
        }
        matrizDiv.appendChild(document.createElement('br'));
    }
}