/// <reference types="cypress" />


import BasePage from "./BasePage";
const basePage = new BasePage();

// MAPEAMENTO DE ELEMENTOS
let campoNomeCompleto = "#nomeCompleto";
let campoEmail = "#email";
let campoSenha = "#senha";
let campoSenhaIgual = "#senhaIgual";
let btnEnviarFoto = "label.MuiButtonBase-root";
let btnVoltarPagina = "button.MuiButtonBase-root:nth-child(1)";
let btnSalvar = "#form > div.MuiBox-root.css-7eri5g > button";
let selectUsuario = "#tipo-usuario"
let selectAdministrador = "#menu-cargo > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1bepd21 > ul > li:nth-child(1)"
let selectInstrutor = "#menu-cargo > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1bepd21 > ul > li:nth-child(2)"
let selectGestaoDePessoas = "#menu-cargo > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1bepd21 > ul > li:nth-child(3)"
let selectGestor = "#menu-cargo > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1bepd21 > ul > li:nth-child(4)"


export default class CadastroUsuarioPage{
    
    preencherCampoNomeCompleto(randomNomeCompleto){
        basePage.preencherCampo(campoNomeCompleto, randomNomeCompleto)
    }

    preencherCampoEmail(randomEmail){
        basePage.preencherCampo(campoEmail, randomEmail)
    }

    preencherCampoSenha(randomPassword){
        basePage.preencherCampo(campoSenha, randomPassword)
    }

    preencherCampoSenhaIgual(randomPassword){
        basePage.preencherCampo(campoSenhaIgual, randomPassword)
    }

    clicarNoBtnSalvar(){
        basePage.click(btnSalvar)
    }

    selecionarTipoUsuarioAdm(){
        basePage.click(selectUsuario);
        basePage.click(selectAdministrador);
    }

    selecionarTipoUsuarioInstrutor(){
        basePage.click(selectUsuario);
        basePage.click(selectInstrutor);
    }

    selecionarTipoUsuarioGestaoDePessoas(){
        basePage.click(selectUsuario);
        basePage.click(selectGestaoDePessoas);
    }

    selecionarTipoUsuarioGestor(){
        basePage.click(selectUsuario);
        basePage.click(selectGestor);
    }
    
    
    limparInputCampoNome(){
        basePage.limparInput(campoNomeCompleto)
    }

    limparInputCampoSenha(){
        basePage.limparInput(campoSenha)
    }

    limparInputCampoSenhaIgual(){
        basePage.limparInput(campoSenhaIgual)
    }

}

