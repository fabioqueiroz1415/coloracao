var colunas = localStorage.getItem("quantidadeVerticesGlobal");
var linhas = localStorage.getItem("quantidadeVerticesGlobal");
var matrizAdjacencia = getMatriz();
//main: calcula coloração
// numeroCromatico
// verticesPorCor
/*
function main() {
    const numVertices = colunas;
    const cores = Array(numVertices).fill(-1); // Inicializa todas as cores como -1 (sem cor)
    let c = 1; // Primeira cor usada

    cores[0] = 1; // Atribui a primeira cor ao primeiro vértice

    for (let v = 1; v < numVertices; v++) {
        let ok = true; // Indica se uma cor pode ser usada para o vértice atual

        // Procura a primeira cor que pode ser usada para o vértice v
        for (let k = 1; k <= c; k++) {
            ok = true; // Assume que a cor k é válida inicialmente
            // Verifica se algum vértice adjacente a v tem a cor k
            for (let u = 0; u < v; u++) {
                if (matrizAdjacencia[v][u] && cores[u] === k) {
                    ok = false; // Cor k não pode ser usada para o vértice v
                    break;
                }
            }
            if (ok) {
                cores[v] = k; // Atribui a cor k ao vértice v
                break; // Sai do loop de cores
            }
        }

        if (!ok) {
            c++; // Incrementa o número de cores
            cores[v] = c; // Atribui uma nova cor ao vértice v
        }
    }
    for(var i = 0; i < cores.length; i ++) {
        cores[i] --;
    }
    return cores; // Retorna o conjunto de cores atribuídas aos vértices
}*/

function main() {
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
    return cores;
}

function montarListaAdjacencias() {
    const listaAdjacencias = [];
    const vertices = matrizAdjacencia.length;
    for (let i = 0; i < vertices; i++) {
        const adjacencias = [];
        for (let j = 0; j < matrizAdjacencia[i].length; j++) {
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

function numeroCromatico() {
    var vertices = colunas;
    var numCromatico = 0;
    var cores = main();
    for(let i = 0; i < vertices; i ++) {
        if(numCromatico < cores[i]) numCromatico = cores[i];
    }
    numCromatico ++;
    return numCromatico;
}

function verticesPorCor() {
    var listasVerticesPorCor = [];
    var listaCores = main();
    for(var cor = 0; cor < numeroCromatico(); cor ++) {
        var listaVertices = [];
        
        for(var vertice = 0; vertice < colunas; vertice ++) {

            if(listaCores[vertice] == cor) {
                listaVertices.push(vertice);
            }
        }
        listasVerticesPorCor.push(listaVertices);
    }
    return listasVerticesPorCor;
}