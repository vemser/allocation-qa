/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import BasePage from "../pages/BasePage";
import LoginPage from "../pages/LoginPage";
import CadastroUsuarioPage from "../pages/CadastroUsuarioPage";
import MainPage from "../pages/MainPage";
import UsuariosPage from "../pages/UsuariosPage";
import CadastroClientePage from '../pages/CadastroClientePage';
import ClientesPage from '../pages/ClientesPage';




const mainPage = new MainPage;
const basePage = new BasePage;
const loginPage = new LoginPage;
const cadastrousuarioPage = new CadastroUsuarioPage;
const usuariosPage = new UsuariosPage;
const cadastroClientePage = new CadastroClientePage;
const clientesPage = new ClientesPage;

const randomFirstName = faker.name.firstName();
const randomLastName = faker.name.lastName();
const randomNomeCompleto = randomFirstName+" "+randomLastName;
const randomEmail = randomFirstName + "." + randomLastName + "@dbccompany.com.br";
const randomPassword = faker.internet.password(20, true, /[A-Z]/, '@!18');
const randomTelefone = "123456789"


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

And(/^que estou logado como Administrador$/, () => {
	loginPage.fazerLoginComAdm();
});

And(/^clico no Menu$/, () => {
	mainPage.clicarBtnMenu();
});

And(/^clico na opção Clientes$/, () => {
	mainPage.clicarBtnClientes();
});

And(/^clico no botão Cadastrar Cliente$/, () => {
	clientesPage.clicarCadastrarCliente();
});

And(/^preencho o campo Nome cliente com um nome válido$/, () => {
	cadastroClientePage.preencherCampoNome(randomNomeCompleto);
});

And(/^preencho o campo Email cliente com um email válido$/, () => {
	cadastroClientePage.preencherCampoEmail(randomEmail);
});

And(/^preencho o campo Telefone cliente com um telefone válido$/, () => {
	cadastroClientePage.preencherCampoTelefone(randomTelefone);
});

And(/^seleciono a Situação como Ativo$/, () => {
	cadastroClientePage.selecionarSituacaoAtivo()
});

When(/^clico em salvar$/, () => {
	cadastroClientePage.clicarBtnSalvar();
});

Then(/^devo receber uma confirmação de que o cliente foi criado com sucesso$/, () => {
	clientesPage.validarToastConfirmacaoNovoClienteCriado();
});

And(/^busco e deleto o cliente criado para limpar o banco de dados$/, () => {
	clientesPage.preencherCampoPesquisar(randomEmail);
	clientesPage.clicarBtnFiltrar();
	clientesPage.clicarDeletarCliente();
});



Then(/^deve exibir uma mensagem pedindo para digitar o nome, telefone e email$/, () => {
	cadastroClientePage.validarCamposObrigatoriosCadastroCliente()
});


