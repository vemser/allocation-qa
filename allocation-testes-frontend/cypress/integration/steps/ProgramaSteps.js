/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import BasePage from "../pages/BasePage";
import LoginPage from "../pages/LoginPage";
import CadastroUsuarioPage from "../pages/CadastroUsuarioPage";
import MainPage from "../pages/MainPage";
import UsuariosPage from "../pages/UsuariosPage";
import CadastroClientePage from '../pages/CadastroClientePage';
import ClientesPage from '../pages/ClientesPage';
import CadastroProgramaPage from '../pages/CadastroProgramaPage';
import ProgramasPage from '../pages/ProgramasPage';


const mainPage = new MainPage;
const basePage = new BasePage;
const loginPage = new LoginPage;
const cadastrousuarioPage = new CadastroUsuarioPage;
const usuariosPage = new UsuariosPage;
const cadastroClientePage = new CadastroClientePage;
const clientesPage = new ClientesPage;
const cadastroProgramaPage = new CadastroProgramaPage;
const programasPage = new ProgramasPage;



const randomFirstName = faker.name.firstName();
const randomLastName = faker.name.lastName();
const randomNomeCompleto = randomFirstName+" "+randomLastName;
const randomEmail = randomFirstName + "." + randomLastName + "@dbccompany.com.br";
const randomPassword = faker.internet.password(20, true, /[A-Z]/, '@!18');
const randomTelefone = "123456789"
const randomDescricao = "Descrição do programa aqui"
const randomNomePrograma = faker.company.catchPhrase();


const randomFirstName2 = faker.name.firstName();
const randomLastName2 = faker.name.lastName();
const randomNomeCompleto2 = randomFirstName2+" "+randomLastName2;
const randomEmail2 = randomFirstName2 + "." + randomLastName2 + "@dbccompany.com.br";
const randomPassword2 = faker.internet.password(20, true, /[A-Z]/, '@!18');



  //////////////////////////////////
 /// TESTES - Endpoint Programa ///
//////////////////////////////////

Given(/^que estou na página inicial$/, () => {
	cy.visit("https://allocation-front.vercel.app/")
});

And(/^que estou logado como Administrador$/, () => {
	loginPage.fazerLoginComAdm();
});

And(/^clico no Menu$/, () => {
	mainPage.clicarBtnMenu();
});

And(/^clico na opção Programas$/, () => {
	mainPage.clicarBtnProgramas();
});

And(/^clico no botão Cadastrar Programa$/, () => {
	programasPage.clicarCadastrarPrograma()
});

And(/^preencho o campo Nome do programa com um nome válido$/, () => {
	cadastroProgramaPage.preencherCampoNome(randomNomePrograma)
});

And(/^preencho o campo Descrição do programa com uma descrição válida$/, () => {
	cadastroProgramaPage.preencherCampoDescricao(randomDescricao)
});

And(/^preencho o campo Data de Término do programa com um telefone válido$/, () => {
	cadastroProgramaPage.preencherCampoData()
});

And(/^seleciono a Situação do programa como Aberto$/, () => {
	cadastroProgramaPage.selecionarSituacaoAberto()
});

When(/^clico em salvar$/, () => {
	cadastroProgramaPage.clicarBtnSalvar()
});

Then(/^devo receber uma confirmação de que o programa foi criado com sucesso$/, () => {
	programasPage.validarToastConfirmacaoNovoProgramaCriado()
});

And(/^busco e deleto o programa criado para limpar o banco de dados$/, () => {
	programasPage.preencherCampoPesquisar(randomNomePrograma)
	programasPage.clicarBtnBuscar()
	basePage.tempo(3000)
	programasPage.clicarDeletarPrograma()
	basePage.tempo(3000)
});


Then(/^deve exibir uma mensagem pedindo para digitar o nome do programa e data de término$/, () => {
	cadastroProgramaPage.validarCamposObrigatoriosCadastroPrograma()
});
