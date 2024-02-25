function irMenu3() {
    var texto = "D:\\Usuarios\\fabio\\Área de Trabalho\\VS CODE\\Teoria dos Grafos\\coloracao\\";
    //var texto = "https:\\fabioqueiroz1415.github.io\\coloracao\\";
    window.location.href = texto + "html\\menu3.html";
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