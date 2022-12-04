/// <reference types="cypress" />


import BasePage from "./BasePage";
const basePage = new BasePage();

// MAPEAMENTO DE ELEMENTOS
let campoDigiteSeuEmail = "#email";
let campoDigiteSuaSenha = "#senha";
let btnLogin = "#button-login";
let linkEsqueciSenha = ".css-vnuqp1";
let linkCrieUmaConta = "#form > div > div:nth-child(5) > a > p";
let toastDeConfirmacaoUsuarioCriado = ".Toastify__toast-body > :nth-child(2)";
let toastDeUsuarioOuSenhaInvalidos = ".Toastify__toast-body > div:nth-child(2)";
let textDigiteSeuEmail = "#email-label";
let textDigiteSuaSenha = "#senha-label";

export default class LoginPage{

    validarTextoDigiteSeuEmail(texto){
        basePage.validarText(textDigiteSeuEmail, texto) 
    } 

    validarTextoDigiteSuaSenha(texto){
        basePage.validarText(textDigiteSuaSenha, texto) 
    } 

    clicarCrieUmaConta(){
        basePage.click(linkCrieUmaConta)
    }

    validarMensagemUsuarioCriado(){
        // basePage.tempo(3000)
        basePage.validarVisibilidade(toastDeConfirmacaoUsuarioCriado)
        basePage.validarText(toastDeConfirmacaoUsuarioCriado, "Usuário cadastrado com sucesso!")
    }

    preencherEmail(){
        basePage.preencherCampo(campoDigiteSeuEmail, "teste@dbccompany.com.br")
    }

    preencherSenha(){
        basePage.preencherCampo(campoDigiteSuaSenha, "testeqa12@") 
    }

    preencherSenhaErrada(){
        basePage.preencherCampo(campoDigiteSuaSenha, "asdhuqiwhuqhwe1231@212") 
    }

    clicarBtnLogin(){
        basePage.click(btnLogin)
    }

    fazerLoginComAdm(){
        this.preencherEmail();
        this.preencherSenha();
        this.clicarBtnLogin();
    }

    validarMensagemUsuarioOuSenhaInvalidos(){
        // basePage.tempo(3000)
        basePage.validarVisibilidade(toastDeUsuarioOuSenhaInvalidos)
        basePage.validarText(toastDeUsuarioOuSenhaInvalidos, "Usuário ou senha inválidos")
    }

}

