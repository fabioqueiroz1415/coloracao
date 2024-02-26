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

function coloracaoHarmonica() {
    const numVertices = matrizAdjacencia.length;
    const cores = new Array(numVertices).fill(-1); // Inicializa todas as cores como -1 (não atribuídas)

    // Verifica se é seguro atribuir uma cor 'cor' ao vértice 'vertice'
    function eSeguro(vertice, cor, corAtribuida) {
        for (let i = 0; i < numVertices; i++) {
            // Verifica se 'vertice' é adjacente a 'i' e tem a mesma cor 'cor'
            if (matrizAdjacencia[vertice][i] && cores[i] === cor) {
                return false;
            }
        }
        return true;
    }

    // Função para verificar se uma combinação de cores adjacentes já existe
    function combinaçãoExistente(vertice, cor) {
        for (let i = 0; i < numVertices; i++) {
            if (matrizAdjacencia[vertice][i] && cores[i] === cor) {
                return true;
            }
        }
        return false;
    }

    // Função recursiva para atribuir cores aos vértices
    function colorirVertice(vertice) {
        // Caso base: todos os vértices foram coloridos
        if (vertice === numVertices) {
            return true;
        }

        // Tenta atribuir uma cor a 'vertice'
        for (let cor = 0; cor < numVertices; cor++) {
            if (eSeguro(vertice, cor)) {
                // Verifica se a nova cor gera uma combinação de cores adjacentes já existente
                if (!combinaçãoExistente(vertice, cor)) {
                    cores[vertice] = cor; // Atribui a cor 'cor' a 'vertice'

                    // Chama recursivamente para colorir os próximos vértices
                    if (colorirVertice(vertice + 1)) {
                        return true;
                    }

                    // Se não encontrou uma solução, remove a cor atribuída
                    cores[vertice] = -1;
                }
            }
        }

        // Se não é possível colorir 'vertice' com nenhuma cor, retorna false
        return false;
    }

    // Chama a função para colorir o primeiro vértice
    if (!colorirVertice(0)) {
        //Não é possível encontrar uma coloração harmônica."
        for(var i = 0; i < matrizAdjacencia.length; i ++) {
            cores[i] = i;
        }
    }
    console.log(cores);
    // Retorna a coloração harmonica
    return cores;
    
}
