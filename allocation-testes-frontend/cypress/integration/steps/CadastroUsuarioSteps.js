/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import BasePage from "../pages/BasePage";
import LoginPage from "../pages/LoginPage";
import CadastroUsuarioPage from "../pages/CadastroUsuarioPage";
import MainPage from "../pages/MainPage";
import UsuariosPage from "../pages/UsuariosPage";

const mainPage = new MainPage;
const basePage = new BasePage;
const loginPage = new LoginPage;
const cadastroUsuarioPage = new CadastroUsuarioPage;
const usuariosPage = new UsuariosPage;

const randomFirstName = faker.name.firstName();
const randomLastName = faker.name.lastName();
const randomNomeCompleto = randomFirstName+" "+randomLastName;
const randomEmail = randomFirstName + "." + randomLastName + "@dbccompany.com.br";
const randomPassword = faker.internet.password(20, true, /[A-Z]/, '@!18');


const randomFirstName2 = faker.name.firstName();
const randomLastName2 = faker.name.lastName();
const randomNomeCompleto2 = randomFirstName2+" "+randomLastName2;
const randomEmail2 = randomFirstName2 + "." + randomLastName2 + "@dbccompany.com.br";
const randomPassword2 = faker.internet.password(20, true, /[A-Z]/, '@!18');



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
    cadastroUsuarioPage.preencherCampoNomeCompleto(randomNomeCompleto)
});

And(/^preencho o campo "Email" com um email válido$/, () => {
	cadastroUsuarioPage.preencherCampoEmail(randomEmail);
});

And(/^preencho o campo "Senha" com uma senha válida$/, () => {
	cadastroUsuarioPage.preencherCampoSenha(randomPassword);
});

And(/^preencho o campo "Confirme a senha" com a mesma senha do campo anterior$/, () => {
	cadastroUsuarioPage.preencherCampoSenhaIgual(randomPassword);
});

When(/^clico em salvar$/, () => {
	cadastroUsuarioPage.clicarNoBtnSalvar()
});

Then(/^devo receber uma confirmação de que o usuário foi criado com sucesso$/, () => {
	loginPage.validarMensagemUsuarioCriado();
});




/////////////////////////////////////////

Given(/^que estou na página inicial$/, () => {
    cy.visit("https://allocation-front.vercel.app/")
});

And(/^que estou logado como Administrador$/, () => {
	loginPage.fazerLoginComAdm();
});

And(/^clico no Menu$/, () => {
	mainPage.clicarBtnMenu();
});

And(/^clico na opção Usuários$/, () => {
	mainPage.clicarBtnUsuarios();
});

And(/^clico no botão Cadastrar Usuário$/, () => {
	usuariosPage.clicarCadastrarUsuario();
});

And(/^preencho o campo Nome completo com um nome válido$/, () => {
    cadastroUsuarioPage.preencherCampoNomeCompleto(randomNomeCompleto2)
});

And(/^preencho o campo Email com um email válido$/, () => {
	cadastroUsuarioPage.preencherCampoEmail(randomEmail2);
});

And(/^preencho o campo Senha com uma senha válida$/, () => {
	cadastroUsuarioPage.preencherCampoSenha(randomPassword2);
});

And(/^preencho o campo Confirme a senha com a mesma senha do campo anterior$/, () => {
	cadastroUsuarioPage.preencherCampoSenhaIgual(randomPassword2);
});

And(/^seleciono o Tipo de Usuario Administrador$/, () => {
	cadastroUsuarioPage.selecionarTipoUsuarioAdm();
});

When(/^clico em salvar$/, () => {
	cadastroUsuarioPage.clicarNoBtnSalvar();
});

Then(/^devo receber uma confirmação de que o usuário adm foi criado com sucesso$/, () => {
	usuariosPage.validarToastConfirmacaoNovoUsuarioCriado();
});

And(/^busco e deleto o usuario criado para limpar o banco de dados$/, () => {
	usuariosPage.preencherCampoPesquisar(randomEmail2);
	usuariosPage.clicarBtnBuscar();
	usuariosPage.clicarDeletarUsuario();
})

