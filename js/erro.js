export function exibirPopupErro() {
    var errorPopup = document.getElementById("teste");
    errorPopup.classList.add("error-popup");
    errorPopup.style.display = 'block'; // Exibe o popup de erro
}

export function fecharPopupErro(id) {
    var errorPopup = document.getElementById(id);
    errorPopup.style.display = 'none'; // Oculta o popup de erro
}
