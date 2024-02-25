function irMenu4() {
        //window.location.href = "https://fabioqueiroz1415.github.io/coloracao/html/menu4.html";
        window.location.href = "D:\\Usuarios\\fabio\\Área de Trabalho\\VS CODE\\Teoria dos Grafos\\coloracao\\html\\menu4.html";
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
}