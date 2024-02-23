function calculaColoracaoCompleta() {

}

function calculaColoracaoHarmoniosa() {

}

function montarListaAdjacencias(matrizAdjacencia) {
    const listaAdjacencias = [];
    for (let i = 0; i < matrizAdjacencia.length; i++) {
        const adjacencias = [];
        for (let j = 0; j < matrizAdjacencia[i].length; j++) {
            if (matrizAdjacencia[i][j] === 1) {
                adjacencias.push(j);
            }
        }
        listaAdjacencias.push(adjacencias);
    }
    return listaAdjacencias;
}

function inicializarEstruturaCores(quantidadeVertices) {
    const cores = new Array(quantidadeVertices).fill(0);
    return cores;
}

function inicializarFila() {
    return [];
}

function verticeMaiorGrau(listaAdjacencias) {
    let maiorGrau = 0;
    let vertice = 0;
    for (let i = 0; i < listaAdjacencias.length; i++) {
        if (listaAdjacencias[i].length > maiorGrau) {
            maiorGrau = listaAdjacencias[i].length;
            vertice = i;
        }
    }
    return vertice;
}

function coloreVertice(vertice, cores, listaAdjacencias) {
    if (cores[vertice] === 0) {
        let corApropriada = 1;
        while (true) {
            let corDisponivel = true;
            for (let i = 0; i < listaAdjacencias[vertice].length; i++) {
                const adjacente = listaAdjacencias[vertice][i];
                if (cores[adjacente] === corApropriada) {
                    corDisponivel = false;
                    break;
                }
            }
            if (corDisponivel) {
                cores[vertice] = corApropriada;
                break;
            }
            corApropriada++;
        }
    }
}

function numeroCromaticoCores(matrizAdjacencia) {
    const listaAdjacencias = montarListaAdjacencias(matrizAdjacencia);
    const quantidadeVertices = listaAdjacencias.length;
    let cores = inicializarEstruturaCores(quantidadeVertices);
    const fila = inicializarFila();

    const verticeInicial = verticeMaiorGrau(listaAdjacencias);
    coloreVertice(verticeInicial, cores, listaAdjacencias);
    fila.push(verticeInicial);

    while (fila.length > 0) {
        const verticeAtual = fila.shift();
        for (let i = 0; i < listaAdjacencias[verticeAtual].length; i++) {
            const adjacente = listaAdjacencias[verticeAtual][i];
            coloreVertice(adjacente, cores, listaAdjacencias);
            fila.push(adjacente);
        }
    }

    return cores;
}

function coloreVertices(matrizAdjacencia) {
    var vertices = window.vertices;
    var coresDisponiveis = [
        "#FF5733", // Coral
        "#FFC300", // Yellow
        "#DAF7A6", // Light Green
        "#5F27CD", // Purple
        "#45CE30", // Green
    ];
    var cores = numeroCromaticoCores(matrizAdjacencia);
    
    for(var i = 0; i < cores.length; i ++) {
        cores[i] = coresDisponiveis[cores[i]];
    }

    
    for(var vertice=0; vertice<vertices; vertice++) {
        var input = document.getElementById(-1+" "+vertice);
        input.style.background = cores[vertice];

        input = document.getElementById(vertice + " " + (-1));
        input.style.background = cores[vertice];
    }
}

function colorirVertices() {
    if(!isMatrizCheia()) {
        alert("preencha a matriz!!");
        return;
    }
    var opcao = document.getElementById('opcoes').value;
    switch(opcao) {
        case 'cromatico':
            coloreVertices(getMatriz());
            break;
        case 'harmoniosa':
            
            break;
        case 'completa':
            
            break;
        default:
            console.error('Opção inválida!!');
            break
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

function getMatriz() {
    var matriz = [];
    for(var i=0; i<vertices; i++) {
        matriz.push([]);
        for(var j=0; j<vertices; j++) {
            var input=document.getElementById(i+' '+j);
            matriz[i].push(input.value);
        }
    }
    return matriz;
}