/// <reference types="cypress" />


import BasePage from "./BasePage";
const basePage = new BasePage();

// MAPEAMENTO DE ELEMENTOS
let campoNome = "#nome";
let campoEmail = "#email";
let campoTelefone = "#telefone"
let selectSituacao = "#situacao"
let selectAtivo = "#menu-situacao > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1bepd21 > ul > li.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.css-30mtm9"
let btnSalvar = "#form > div.MuiBox-root.css-7eri5g > button";
let textInformeNomeCliente = "#nome-helper-text";
let textInformeTelefoneCliente = "#telefone-helper-text";
let textInformeEmailCliente = "#email-helper-text"


export default class CadastroClientePage{
    
    preencherCampoNome(randomNome){
        basePage.preencherCampo(campoNome, randomNome)
    }

    preencherCampoEmail(randomEmail){
        basePage.preencherCampo(campoEmail, randomEmail)
    }

    preencherCampoTelefone(randomTelefone){
        basePage.preencherCampo(campoTelefone, randomTelefone)
    }

    selecionarSituacaoAtivo(){
        basePage.click(selectSituacao);
        basePage.click(selectAtivo)
    }

    clicarBtnSalvar(){
        basePage.click(btnSalvar)
    }

    validarCamposObrigatoriosCadastroCliente(){
        basePage.validarText(textInformeNomeCliente, "Por favor, informe o nome do cliente");
        basePage.validarText(textInformeTelefoneCliente, "Por favor, informe um telefone");
        basePage.validarText(textInformeEmailCliente, "Por favor, informe o e-mail do cliente");
    }

    





}

