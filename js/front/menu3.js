function irMenu3() {
    //var texto = "D:\\Usuarios\\fabio\\Área de Trabalho\\VS CODE\\Teoria dos Grafos\\coloracao\\html\\menu3.html";
    var texto = "https://fabioqueiroz1415.github.io/coloracao/html/menu3.html";
    window.location.href = texto;
}
function setEscolha() {
    var esclh = localStorage.getItem("escolhaGlobal");

    if(esclh) document.getElementById("escolha").value = esclh;
    
    limparEscolhaGlobal();
}

function setEscolhaGlobal() {
    var esclh = document.getElementById("escolha").value;

    localStorage.setItem("escolhaGlobal", esclh);

    if(!esclh) esclh = "Coloração de Vértices";
}

function limparEscolhaGlobal() {
    localStorage.setItem("escolhaGlobal", "");
}