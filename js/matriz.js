function criarMatriz() {
    var n = document.getElementById('tamanho').value;
    var matrizDiv = document.getElementById('matriz');
    var letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //var letra_linhas = letras.charAt(i);
    matrizDiv.innerHTML = '';

    if(n>10 || n < 1){
        alert("0 < nº de vértices <= 10");
        return;
    }
    for(var i=-1; i<=n; i++) {
        for(var j=-1; j<=n; j++) {
            if(i == -1) {
                //rotulando colunas
                var input = document.createElement('input');
                input.type = 'texto';
                input.value = letras.charAt(j);
                input.readOnly = true;
                input.classList.add('rotulo');
                matrizDiv.appendChild(input);
                continue;
            }
            if(j == -1) {
                //rotulando linhas
                var input = document.createElement('input');
                input.type = 'texto';
                input.value = letras.charAt(i);
                input.readOnly = true;
                input.classList.add('rotulo');
                matrizDiv.appendChild(input);
                continue;
            }
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