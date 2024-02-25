var colunas = localStorage.getItem("quantidadeVerticesGlobal");
var linhas = localStorage.getItem("quantidadeVerticesGlobal");
var matrizAdjacencia = getMatriz();
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
            if (cores[adjacente] === 0) { // Verifica se o vértice adjacente ainda não foi colorido
                coloreVertice(adjacente, cores, listaAdjacencias);
                fila.push(adjacente); // Adiciona o vértice adjacente à fila para processamento posterior
            }
        }
    }

    return cores;
}

function numeroCromatico() {
    var vertices = window.vertices;
    var numCromatico = 0;
    var cores = main();
    for(let i = 0; i < vertices; i ++) {
        if(numCromatico < cores[i]) numCromatico = cores[i];
    }

    return numCromatico;
}

function montarListaAdjacencias() {
    const listaAdjacencias = [];
    var vertices = linhas;
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

let corMaxima = 1;

function coloreVertice(vertice, cores, listaAdjacencias) {
    if (cores[vertice] === 0) {
        var coresUtilizadas = []; // Lista para armazenar as cores utilizadas pelos vizinhos
        for (let i = 0; i < listaAdjacencias[vertice].length; i++) {
            var adjacente = listaAdjacencias[vertice][i];
            if (cores[adjacente] !== 0) {
                coresUtilizadas.push(cores[adjacente]); // Adiciona a cor do vizinho à lista de cores utilizadas
            }
        }
        // Encontra a menor cor disponível que não está sendo utilizada pelos vizinhos
        for (let cor = 1; ; cor++) {
            if (!coresUtilizadas.includes(cor)) {
                cores[vertice] = cor;
                if (cor > corMaxima) {
                    corMaxima = cor;
                }
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
            var input = localStorage.getItem("inputCelulaGlobal "+id);
            if(i == j) input = 0;
            linha.push(input);
        }
        matriz.push(linha);
        
    }
    return matriz;
}