function irMenu4() {
        window.location.href = "https://fabioqueiroz1415.github.io/coloracao/html/menu4.html";
}

function limparVariaveisGlobais() {
        localStorage.clear();
}

function criarResultado() {
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