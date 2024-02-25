function irMenu4() {
        //var texto = "D:\\Usuarios\\fabio\\Área de Trabalho\\VS CODE\\Teoria dos Grafos\\coloracao\\";
        var texto = "https:\\fabioqueiroz1415.github.io\\coloracao\\";
        window.location.href = texto + "html\\menu4.html";
}
function limparVariaveisGlobais() {
        localStorage.clear();
}

function criarResultado() {
        var listasPorCor;
        var escolha = localStorage.getItem("escolhaGlobal");;
        switch(escolha) {
                case "Coloração de Vértices":
                        listasPorCor = getColoracaoVertices();
                        break;
                case "Coloração Harmônica":
                        //
                        alert(escolha);
                        //
                        break;
                case "Coloração de Arestas":
                        //
                        alert(escolha);
                        //
                        break;
                case "Coloração Completa":
                        //
                        alert(escolha);
                        //
                        break;
                default:
                        alert(escolha + " não existe.");
        }
        criarDivPrincipal(listasPorCor);

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

function criarDivPrincipal(listasVerticesPorCor) {
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
        var caracteres = "ABCDEFGHIJKLM";
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