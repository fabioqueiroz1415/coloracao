
var colunas = window.wColunas;
var linhas = window.wLinhas;

function irMenu2() {
    //window.location.href = "https://fabioqueiroz1415.github.io/coloracao/html/menu2.html";
    window.location.href = "D:\\Usuarios\\fabio\\Área de Trabalho\\VS CODE\\Teoria dos Grafos\\coloracao\\html\\menu2.html";
}

function criarMatriz() {
    const matrizDiv = document.getElementById('matriz');
    const tabela = document.createElement('table');
    


    for (let i = 0; i < linhas; i++) {
        const linha = document.createElement('tr');

        for (let j = 0; j < colunas; j++) {
            const celula = document.createElement('td');
            const input = document.createElement("input");
            input.type = "number";
            input.min = -1;
            input.max = 1;
            input.classList.add("input-celula");
            input.addEventListener('keydown', (event) => {
                handleKeyDown(event, i, j);
            });
            celula.appendChild(input);
            
            linha.appendChild(celula);
        }

        tabela.appendChild(linha);
    }

    matrizDiv.appendChild(tabela);
}

function handleKeyDown(event, rowIndex, colIndex) {
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