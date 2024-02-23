function calculaColoracaoCompleta() {

}

function calculaColoracaoHarmoniosa() {

}

function montarListaAdjacencias(matrizAdjacencia) {
    const listaAdjacencias = [];
    var vertices = window.vertices;
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

function numeroCromatico(matrizAdjacencia) {
    var vertices = window.vertices;
    var numCromatico = 0;
    var cores = numeroCromaticoCores(matrizAdjacencia);
    for(let i = 0; i < vertices; i ++) {
        if(numCromatico < cores[i]) numCromatico = cores[i];
    }

    return numCromatico;
}

function coloreVertices(matrizAdjacencia) {
    var vertices = window.vertices;
    var coresDisponiveis = [
        "#FF5733", // Coral
        "#FFC300", // Yellow
        "#DAF7A6", // Light Green
        "#5F27CD", // Purple
        "#45CE30", // Green
        "#8A2BE2", // BlueViolet
        "#556B2F", // DarkOliveGreen
        "#8B0000", // Dark Red
        "#00FFFF"  // Aqua
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

    //mostrando o numero de coloracao
    var paragrafo = document.getElementById("resultado");
    paragrafo.textContent = "Número Cromático: " + numeroCromatico(getMatriz());
    paragrafo.style.visibility = "visible";
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
        const linha = [];
        for(var j=0; j<vertices; j++) {
            var input=document.getElementById(i+' '+j);
            linha.push(input.value);
        }
        matriz.push(linha);
    }
    return matriz;
}