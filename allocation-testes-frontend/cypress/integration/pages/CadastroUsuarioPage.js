/// <reference types="cypress" />


import BasePage from "./BasePage";
const basePage = new BasePage();

let campoNomeCompleto = "#nomeCompleto";
let campoEmail = "#email";
let campoSenha = "#senha";
let campoSenhaIgual = "#senhaIgual";
let btnEnviarFoto = "label.MuiButtonBase-root";
let btnVoltarPagina = "button.MuiButtonBase-root:nth-child(1)";
let btnSalvar = "button.MuiButtonBase-root:nth-child(2)";
let selectAdministrador = "#menu-cargo > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1bepd21 > ul > li:nth-child(1)"
let selectUsuario = "#tipo-usuario"

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
}

