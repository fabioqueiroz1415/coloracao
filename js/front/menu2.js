function irMenu2() {
    window.location.href = "https://fabioqueiroz1415.github.io/coloracao/html/menu2.html";
}

var colunas = localStorage.getItem("quantidadeVerticesGlobal");
var linhas = localStorage.getItem("quantidadeVerticesGlobal");

function criarMatriz() {
    const matrizDiv = document.getElementById('matriz');
    const tabela = document.createElement('table');
    //começando i e j com -1, pois ha uma coluna e uma linha a mais com os rótulos
    var letras = "ABCDEFGHIJKLM";
    for (let i = -1; i < linhas; i++) {
        const linha = document.createElement('tr');

        for (let j = -1; j < colunas; j++) {
            const celula = document.createElement('td');
            const input = document.createElement("input");
            input.id = i+" "+j;

            if(i == -1) {
                input.value = letras.charAt(j);
                input.readOnly = true;
                input.classList.add("input-rotulo-coluna");
                celula.appendChild(input);
                linha.appendChild(celula);
                continue;
            }
            if(j == -1) {
                input.value = letras.charAt(i);
                input.readOnly = true;
                input.classList.add("input-rotulo-linha");
                celula.appendChild(input);
                linha.appendChild(celula);
                continue;
            }

            input.type = "number";
            input.min = 0;
            input.max = 1;
            input.oninput = function() {
                verificaInput(this);
            }

            //nenhum vértice é adjacente a si mesmo
            if(i == j) {
                input.value = 0;
                input.readOnly = true;
            }

            input.classList.add("input-celula");
            input.addEventListener('keydown', (event) => {
                apertouTecla(event, i, j);
            });
            celula.appendChild(input);
            
            linha.appendChild(celula);
        }

        tabela.appendChild(linha);
    }

    matrizDiv.appendChild(tabela);
}

function apertouTecla(event, rowIndex, colIndex) {
    const key = event.key;
    const inputs = document.querySelectorAll('input[type="number"]');
    let nextInput;

    if (key === 'ArrowRight' && colIndex < colunas - 1) {
        nextInput = inputs[rowIndex * colunas + colIndex + 1];
    } else if (key === 'ArrowLeft' && colIndex > 0) {
        nextInput = inputs[rowIndex * colunas + colIndex - 1];
    } else if (key === 'ArrowDown' && rowIndex < linhas - 1) {
        nextInput = inputs[(rowIndex + 1) * colunas + colIndex];
    } else if (key === 'ArrowUp' && rowIndex > 0) {
        nextInput = inputs[(rowIndex - 1) * colunas + colIndex];
    }

    if (nextInput) {
        nextInput.focus();
        event.preventDefault();
    }
}

var antigoNum = 1;
function verificaInput(elemento) {
    var num = elemento.value;
    if(antigoNum * 10 == num) num = 0;
    else num = 1;

    antigoNum = num;
    elemento.value = num;
}

function setInputCelulaGlobal(id) {
    var value = document.getElementById(id).value;

    if(!value) value = 0;

    localStorage.setItem("inputCelulaGlobal "+id, value);
}

function setInputCelulasGlobal() {
    for(var i = 0; i < linhas; i ++) {
        for(var j = 0; j < colunas; j ++) {
            var id = i + " " + j;
            if(i != j) setInputCelulaGlobal(id);
        }
    }
}

function setInputCelula(id) {
    var inpt = localStorage.getItem("inputCelulaGlobal " + id);
    if(inpt) document.getElementById(id).value = inpt;
}

function setInputCelulas() {
    for(var i = 0; i < linhas; i ++) {
        for(var j = 0; j < colunas; j ++) {
            var id = i + " " + j;
            setInputCelula(id);
        }
    }

    limparInputCelulasGlobais();
}

function limparInputCelulasGlobais() {
    for(var i = 0; i < linhas; i ++) {
        for(var j = 0; j < colunas; j ++) {
            var id = i + " " + j;
            if(i != j) localStorage.setItem("inputCelulaGlobal " + id, "");
        }
    }
}