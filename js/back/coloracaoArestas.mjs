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

function coloracaoVizing() {
    // Obtém o número de vértices no grafo
    const numVertices = matrizAdjacencia.length;
    // Calcula o grau de cada vértice no grafo
    const grauVertices = matrizAdjacencia.map(linha => linha.reduce((acc, val) => acc + val, 0));
    // Objeto para armazenar as cores das arestas, inicialmente vazio
    const coresArestas = {};
    // Inicializa a cor como 0
    let cor = 0;

    // Percorre todas as combinações possíveis de pares de vértices (arestas)
    for (let i = 0; i < numVertices; i++) {
        for (let j = i + 1; j < numVertices; j++) {
            // Se houver uma aresta entre os vértices i e j
            if (matrizAdjacencia[i][j] === 1) {
                // Inicializa a disponibilidade da cor como verdadeira
                let corDisponivel = true;
                // Percorre todas as arestas já coloridas
                for (let aresta in coresArestas) {
                    // Separa os vértices da aresta
                    const [vertice1, vertice2] = aresta.split("-");
                    // Se a aresta já estiver conectada a vértices com a mesma cor
                    if (matrizAdjacencia[i][parseInt(vertice1)] && matrizAdjacencia[j][parseInt(vertice2)] && coresArestas[aresta] === cor) {
                        // A cor não está disponível
                        corDisponivel = false;
                        break;
                    }
                }
                // Se a cor estiver disponível para a aresta
                if (corDisponivel) {
                    // Atribui a cor à aresta
                    coresArestas[`${i}-${j}`] = cor;
                } else {
                    // Se não estiver, incrementa a cor e atribui à aresta
                    cor++;
                    coresArestas[`${i}-${j}`] = cor;
                }
            }
        }
    }

    // Retorna as cores atribuídas às arestas
    console.log(coresArestas);
    return coresArestas;
}

function coloracaoArestas() {
    var coresArestas = coloracaoVizing()
    // Inicializa uma lista de cores vazia
    const listaCores = [];
    
    // Obtém o número de vértices
    const numVertices = colunas;
    
    // Percorre os vértices e as arestas em ordem
    for (let i = 0; i < numVertices; i++) {
        for (let j = i + 1; j < numVertices; j++) {
            // Cria a chave da aresta
            const aresta = `${i}-${j}`;
            
            // Se a aresta existe no objeto coresArestas
            if (coresArestas.hasOwnProperty(aresta)) {
                // Adiciona a cor correspondente à lista de cores
                listaCores.push(coresArestas[aresta]);
            }
        }
    }
    
    // Retorna a lista de cores
    return listaCores;
}
