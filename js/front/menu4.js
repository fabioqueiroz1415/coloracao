function irMenu4() {
        //var texto = "D:\\Usuarios\\fabio\\Área de Trabalho\\VS CODE\\Teoria dos Grafos\\coloracao\\html\\menu4.html";
        var texto = "https://fabioqueiroz1415.github.io/coloracao/html/menu4.html";
    window.location.href = texto;
}
function limparVariaveisGlobais() {
        localStorage.clear();
}

function criarResultado() {
        var listasPorCor;
        var escolha = localStorage.getItem("escolhaGlobal");
        var isArestas = false;
        switch(escolha) {
                case "Coloração de Vértices":
                        listasPorCor = getPorCor(coloracaoVertices());
                        break;
                case "Coloração Harmônica":
                        listasPorCor = getPorCor(coloracaoHarmonica());
                        break;
                case "Coloração de Arestas":
                        listasPorCor = getPorCor(coloracaoArestas());
                        isArestas = true;
                        break;
                case "Coloração Completa":
                        listasPorCor = getPorCor(coloracaoCompleta());
                        break;
                default:
                        alert(escolha + " não existe.");
        }
        criarDivPrincipal(listasPorCor, isArestas);

}

function criarInput(cor) {
        var input = document.createElement("input");
        input.readOnly = true;
        input.style.backgroundColor = cor;
        input.classList.add("input-cores");

        return input;
}

function criarP(caracteres, listaVerticesPorCor) {
        var p = document.createElement("p");
        var texto = "";
        p.classList.add("p-resultado-cores");

        texto = ": [";
        for(var j = 0; j < listaVerticesPorCor.length; j ++) {
                var vertice = listaVerticesPorCor[j];
                var caracter = caracteres[vertice];
                texto += caracter;
                if(!((j + 1) < listaVerticesPorCor.length)) break;
                texto += ", ";
        }
        texto += "]";
        p.textContent = texto;

        return p;
}

function criarDiv(input, p) {
        var div = document.createElement("div");
        div.classList.add("div-resultado-cores");
        div.appendChild(input);
        div.appendChild(p);
        return div;
}

function criaTitulo() {
        var esclh = localStorage.getItem("escolhaGlobal");
        document.getElementById("resultado-titulo").textContent = esclh;
}

function criaNumeroCromatico(listasVerticesPorCor) {
        document.getElementById("resultado-cores-distintas").textContent = listasVerticesPorCor.length;
}

function criarDivPrincipal(listasVerticesPorCor, isArestas) {
        criaTitulo();
        criaNumeroCromatico(listasVerticesPorCor);
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
        var caracteres = "ABCDEFGHIJKLM";;
        if(isArestas) {
                caracteres = "123456789";
        }

        var numeroCromatico = listasVerticesPorCor.length;
        for(var i = 0; i < numeroCromatico; i ++){
                var cor = cores[i];
                var input = criarInput(cor);
                var p = criarP(caracteres, listasVerticesPorCor[i]);
                var div = criarDiv(input, p);
                var divPrincipal = document.getElementById("resultado");
                divPrincipal.appendChild(div);
        }
        
        
}

function numeroCromatico(cores) {
        var vertices = colunas;
        var numCromatico = 0;
        for(let i = 0; i < vertices; i ++) {
            if(numCromatico < cores[i]) numCromatico = cores[i];
        }
        numCromatico ++;
        return numCromatico;
    }

function getPorCor(listaCores) {
        var listasPorCor = [];
        var crom = numeroCromatico(listaCores)
        for(var cor = 0; cor < crom; cor ++) {
            var listaVertices = [];
            
            for(var vertice = 0; vertice < colunas; vertice ++) {
    
                if(listaCores[vertice] == cor) {
                    listaVertices.push(vertice);
                }
            }
            listasPorCor.push(listaVertices);
        }
        return listasPorCor;
    }