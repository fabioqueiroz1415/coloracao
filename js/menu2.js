
function irMenu2() {
    window.location.href = "https://fabioqueiroz1415.github.io/coloracao/menu2.html";
}

window.wEscolha = -1;
function main() {
    window.wEscolha = document.getElementById("escolha").value;
    /*
    definindo o que cada coloração precisa: adjacencia(0) ou incidencia(1)
    */

    switch (wEscolha) {
        case "coloracaoharmonica":
            wEscolha = 0;
            break;
        case "coloracaodevertices":
            wEscolha = 0;
            break;
        case "coloracaodearestas":
            wEscolha = 1;
            break;
        case "coloracaocompleta":
            wEscolha = 0;
            break;
        default:
            alert("ocorreu um erro! tente novamente.");
            break;
    }
    if(wEscolha == 1) {
        document.getElementById("quantidade de arestas").hidden = true;
    }
}