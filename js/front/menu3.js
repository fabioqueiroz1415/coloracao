function irMenu3() {
    window.location.href = "https://fabioqueiroz1415.github.io/coloracao/html/menu3.html";
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