/// <reference types="cypress" />

import BasePage from "../pages/BasePage";
// import LoginPage, { validarLogin, validarMensagemAlertaSenha, validarMensagemErro, validarRedirecionamentoTelaLogin } from "../pages/LoginPage";
import LoginPage from "../pages/LoginPage";
import CadastroUsuarioPage from "../pages/CadastroUsuarioPage";

const basePage = new BasePage;
const loginPage = new LoginPage;
const cadastrousuarioPage = new CadastroUsuarioPage;

/// TESTES - Cadastro Usuario //

//Teste redirecionamento tela cadastro usuario 

Given(/^que estou na página inicial$/, () => {
    cy.visit("https://allocation-front.vercel.app/")
});

When(/^clico no link "Crie uma conta"$/, () => {
	loginPage.clicarCrieUmaConta()
});

Then(/^devo validar redirecionamento para página de cadastro de usuário$/, () => {
    basePage.validarUrl("https://allocation-front.vercel.app/cadastro-usuario")
});


//Teste cadastro de usuario com sucesso 
Given(/^que estou na página inicial$/, () => {
	cy.visit("https://allocation-front.vercel.app/")
});

And(/^clico no link "Crie uma conta"$/, () => {
	loginPage.clicarCrieUmaConta()
});

And(/^preencho o campo "Nome completo" com um nome válido$/, () => {
    cadastrousuarioPage.preencherCampoNomeCompleto()
});

And(/^preencho o campo "Email" com um email válido$/, () => {
	cadastrousuarioPage.preencherCampoEmail();
});

And(/^preencho o campo "Senha" com uma senha válida$/, () => {
	cadastrousuarioPage.preencherCampoSenha();
});

And(/^preencho o campo "Confirme a senha" com a mesma senha do campo anterior$/, () => {
	cadastrousuarioPage.preencherCampoSenhaIgual();
});

When(/^clico em salvar$/, () => {
	cadastrousuarioPage.clicarNoBtnSalvar()
});

Then(/^devo receber uma confirmação de que o usuário foi criado com sucesso$/, () => {
	loginPage.validarMensagemUsuarioCriado();
});
