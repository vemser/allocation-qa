/// <reference types="cypress" />

import BasePage from "../pages/BasePage";
import LoginPage from "../pages/LoginPage";

const basePage = new BasePage;
const loginPage = new LoginPage;


  ///////////////////////////////
 /// TESTES - Endpoint Login ///
///////////////////////////////

Given(/^que estou na página inicial$/, () => {
	cy.visit("https://allocation-front.vercel.app/")
});

And(/^preencho o campo de login de Email com um email válido$/, () => {
	loginPage.preencherEmail();
});

And(/^preencho o campo de login de Senha com uma senha válida$/, () => {
	loginPage.preencherSenha();
});

When(/^clico no botão Login$/, () => {
	loginPage.clicarBtnLogin();
});

Then(/^devo validar redirecionamento para página principal$/, () => {
	basePage.validarUrl("https://allocation-front.vercel.app/painel-vagas")
});





And(/^preencho o campo de login de Senha com uma senha inválida$/, () => {
	loginPage.preencherSenhaErrada();
});


Then(/^devo receber uma mensagem de Usuário ou senha inválidos$/, () => {
	loginPage.validarMensagemUsuarioOuSenhaInvalidos();
});



Then(/^deve exibir uma mensagem pedindo para digitar o email e a senha$/, () => {
	loginPage.validarTextoDigiteSeuEmail("Por favor Digite seu e-mail")
    loginPage.validarTextoDigiteSuaSenha("Por favor Digite sua senha")
});
