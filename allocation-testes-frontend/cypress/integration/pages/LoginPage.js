/// <reference types="cypress" />


import BasePage from "./BasePage";
const basePage = new BasePage();

let campoDigiteSeuEmail = "#email";
let campoDigiteSuaSenha = "#senha";
let btnLogin = "#button-login";
let linkEsqueciSenha = ".css-vnuqp1";
let linkCrieUmaConta = ".css-18writv";
let toastDeConfirmacaoUsuarioCriado = ".Toastify__toast-body > :nth-child(2)";


export default class LoginPage{

    clicarCrieUmaConta(){
        basePage.click(linkCrieUmaConta)
    }

    validarMensagemUsuarioCriado(){
        // basePage.tempo(3000)
        basePage.validarVisibilidade(toastDeConfirmacaoUsuarioCriado)
        basePage.validarText(toastDeConfirmacaoUsuarioCriado, "Usuário cadastrado com sucesso!")
    }


}

