import {exibirPopupErro} from "./erro";

function calculaColoracaoCompleta() {

}

function calculaColoracaoHarmoniosa() {

}

function calculaNumeroCromatico() {

}

function calcularColoracao() {
    exibirPopupErro(id = 'opcao');
    var opcao = document.getElementById('opcoes').value;
    switch(opcao) {
        case 'cromatico':
            
            break;
        case 'harmoniosa':
            
            break;
        case 'completa':
            
            break;
        default:
            console.error('Opção inválida!!');
            break
    }
}