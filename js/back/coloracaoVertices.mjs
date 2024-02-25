var colunas = localStorage.getItem("quantidadeVerticesGlobal");
var linhas = localStorage.getItem("quantidadeVerticesGlobal");
var matrizAdjacencia = getMatriz();

function resultado() {
            //titulo
            var esclh = localStorage.getItem("escolhaGlobal");
            document.getElementById("resultado-titulo").textContent = esclh;
    
            //numero cromatico
            var crom = numeroCromatico();
            document.getElementById("resultado-cores-distintas").textContent = crom;
    
            //determinar quais vértices tem qual cor
            var varVerticesPorCor = verticesPorCor();
    
            //caracteres
            var caracteres = "ABCDEFGHIJKLM";
    
            //cores
            var cores = [
                    "#FF00FF", // Magenta
                    "#00DD62", // Verde
                    "#FFD700", // Ouro
                    "#FF6347", // Vermelho coral
                    "#1E90FF", // Azul royal
                    "#8A2BE2", // Violeta
                    "#32CD32", // Verde-limão
                    "#FF4500", // Laranja vermelho
                    "#FFFF00", // Amarelo
                    "#8B008B", // Magenta escuro
                    "#00CED1", // Turquesa médio
                    "#FF1493", // Rosa brilhante
                    "#FF8C00", // Laranja escuro
                    "#ADFF2F"  // Verde amarelado
                ];
    
                for(var i = 0; i < crom; i ++) {
                    var cor = cores[i];
                    var input = document.createElement("input");
                    
                    input.readOnly = true;
                    input.style.backgroundColor = cor;
                    input.classList.add("input-cores");
    
                    var p = document.createElement("p");
                    var texto = "";
                    p.classList.add("p-resultado-cores");
    
                    texto = ": [";
                    for(var j = 0; j < varVerticesPorCor[i].length; j ++) {
                            var caracter = caracteres[varVerticesPorCor[i][j]]
                            texto += caracter;
                            if(!((j + 1) < varVerticesPorCor[i].length)) break;
                            texto += ", ";
                    }
                    texto += "]";
                    p.textContent = texto;
    
                    var div = document.createElement("div");
                    div.classList.add("div-resultado-cores");
                    div.appendChild(input);
                    div.appendChild(p);
    
                    var elemento = document.getElementById("resultado");
                    elemento.appendChild(div);
                    
                }
}

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