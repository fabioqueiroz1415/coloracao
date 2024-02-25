function irIndex() {
    var texto = "D:\\Usuarios\\fabio\\Área de Trabalho\\VS CODE\\Teoria dos Grafos\\coloracao\\";
    //var texto = "https:\\fabioqueiroz1415.github.io\\coloracao\\";
    window.location.href = texto + "index.html";
}

function setQuantidadeVertices() {
    var qtd = localStorage.getItem("quantidadeVerticesGlobal");

    if(qtd) document.getElementById("quantidade de vertices").value = qtd;
    limparVariaveisGlobais();
}

function setQuantidadeVerticesGlobal() {
    var qtd = document.getElementById("quantidade de vertices").value;
    if(qtd < 2) qtd = 2;
    if(qtd > 7) qtd = 7;

    localStorage.setItem("quantidadeVerticesGlobal", qtd);
}

function limparVariaveisGlobais() {
    localStorage.setItem("quantidadeVerticesGlobal", "");
}
