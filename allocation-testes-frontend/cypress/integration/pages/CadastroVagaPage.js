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



export default class CadastroVagaPage{
    
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
}

