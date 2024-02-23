window.vertices = -1;

function criarMatriz() {
    var recriaMatriz;

    if(isMatrizCheia()) {
        recriaMatriz = window.confirm("Tem certeza que deseja apagar a matriz atual?");
        if(!recriaMatriz) return;
    }

    vertices = document.getElementById('tamanho').value;
    var matrizDiv = document.getElementById('matriz');
    var letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    document.getElementById("botao-cria-matriz").textContent = "Recriar Matriz";
    matrizDiv.innerHTML = '';

    if(vertices>9 || vertices < 1){
        alert("0 < nº de vértices < 10");
        document.getElementById("tamanho").value = 9;
        return;
    }
    for(var i=-1; i<vertices; i++) {
        for(var j=-1; j<vertices; j++) {
            if(i == -1) {
                //rotulando colunas
                var input = document.createElement('input');
                input.type = 'texto';
                input.id = i+' '+j;
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
                input.id = i+' '+j;
                input.value = letras.charAt(i);
                input.readOnly = true;
                input.classList.add('rotulo');
                matrizDiv.appendChild(input);
                continue;
            }
            var input = document.createElement('input');
            input.type = 'number';
            input.id = i+' '+j;
            input.max = 1000;
            input.min = 0;
            input.classList.add('matriz-input');
            matrizDiv.appendChild(input);
        }
        matrizDiv.appendChild(document.createElement('br'));
    }
}

function isMatrizCheia() {
    if(vertices == -1) return false;
    
    for(var i=0; i<vertices; i++) {
        
        for(var j=0; j<vertices; j++) {
            var input=document.getElementById(i+' '+j);
            if(input == null || input.value == '') {
                return false;
            }
        }
        
    }
    
    return true;
}