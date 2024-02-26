var colunas = localStorage.getItem("quantidadeVerticesGlobal");
var linhas = localStorage.getItem("quantidadeVerticesGlobal");
var matrizAdjacencia = getMatriz();

function getMatriz() {
    var matriz = [];
    for(var i=0; i<linhas; i++) {
        const linha = [];
        for(var j=0; j<colunas; j++) {
            var id = i+' '+j;
            var input = parseInt(localStorage.getItem("inputCelulaGlobal "+id));
            if(i == j) input = 0;
            linha.push(input);
        }
        matriz.push(linha);
        
    }
    return matriz;
}

function coloracaoCompleta() {
    const listaAdjacencias = montarListaAdjacencias();
    const quantidadeVertices = listaAdjacencias.length;
    let cores = inicializarEstruturaCores(quantidadeVertices);
    const fila = inicializarFila();

    const verticeInicial = verticeMaiorGrau(listaAdjacencias);
    coloreVertice(verticeInicial, cores, listaAdjacencias);
    fila.push(verticeInicial);

    while (fila.length > 0) {
        const verticeAtual = fila.shift();
        const adjacencias = listaAdjacencias[verticeAtual];
        for (let i = 0; i < adjacencias.length; i++) {
            const adjacente = adjacencias[i];
            if (cores[adjacente] === 0) {
                coloreVertice(adjacente, cores, listaAdjacencias);
                fila.push(adjacente);
            }
        }
    }
    for(var i = 0; i < cores.length; i ++) {
        cores[i] --;
    }
    return cores; // Retorna as cores atribuídas aos vértices
}

function verificaRepeticaoPares(cores) {
    const pares = {};
    for (let i = 0; i < cores.length; i++) {
        for (let j = i + 1; j < cores.length; j++) {
            const par = `${cores[i]},${cores[j]}`;
            if (pares[par]) {
                return false;
            }
            pares[par] = true;
        }
    }
    return true;
}

function montarListaAdjacencias() {
    const listaAdjacencias = [];
    const vertices = colunas;
    for (let i = 0; i < vertices; i++) {
        const adjacencias = [];
        for (let j = 0; j < linhas; j++) {
            if (matrizAdjacencia[i][j] !== 0) {
                adjacencias.push(j);
            }
        }
        listaAdjacencias.push(adjacencias);
    }
    return listaAdjacencias;
}

function inicializarEstruturaCores(quantidadeVertices) {
    return new Array(quantidadeVertices).fill(0);
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
        const coresUtilizadas = [];
        for (let i = 0; i < listaAdjacencias[vertice].length; i++) {
            const adjacente = listaAdjacencias[vertice][i];
            if (cores[adjacente] !== 0) {
                coresUtilizadas.push(cores[adjacente]);
            }
        }
        for (let cor = 1; ; cor++) {
            if (!coresUtilizadas.includes(cor)) {
                cores[vertice] = cor;
                break;
            }
        }
    }
}
