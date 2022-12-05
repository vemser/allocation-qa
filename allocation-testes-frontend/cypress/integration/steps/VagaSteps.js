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
import CadastroVagaPage from '../pages/CadastroVagaPage';

const mainPage = new MainPage;
const basePage = new BasePage;
const loginPage = new LoginPage;
const cadastrousuarioPage = new CadastroUsuarioPage;
const usuariosPage = new UsuariosPage;
const cadastroClientePage = new CadastroClientePage;
const clientesPage = new ClientesPage;
const cadastroProgramaPage = new CadastroProgramaPage;
const programasPage = new ProgramasPage;
const cadastroVagaPage = new CadastroVagaPage;


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



/// TESTES - Cadastro Programa //


Given(/^que estou na página inicial$/, () => {
	cy.visit("https://allocation-front.vercel.app/")
});

And(/^que estou logado como Administrador$/, () => {
	loginPage.fazerLoginComAdm();
});


Then(/^clico no botão Criar Vaga$/, () => {
	mainPage.clicarCriarVaga()
});

Then(/^preencho o campo Nome da vaga com um nome válido$/, () => {
	cadastroVagaPage.preencherCampoNomeDaVaga()
});

Then(/^preencho o campo idCliente de um cliente válido$/, () => {
	cadastroVagaPage.preencherCampoIdCliente()
});

Then(/^preencho o campo idPrograma de um programa válido$/, () => {
	cadastroVagaPage.preencherCampoIdPrograma()
});

Then(/^preencho o campo Número de Vagas com o número válido$/, () => {
	cadastroVagaPage.preencherCampoNumeroDeVagas()
});

Then(/^preencho o campo Data de Abertura com uma data válida$/, () => {
	cadastroVagaPage.preencherCampoDataAbertura()
});

Then(/^preencho o campo Data de Fechamento com uma data válida$/, () => {
	cadastroVagaPage.preencherCampoDataFechamento()
});

Then(/^seleciono a situação da vaga como Aberto$/, () => {
	cadastroVagaPage.clicarBtnSituacao();
	cadastroVagaPage.clicarBtnAberto();
});

When(/^clico no botão salvar Vaga$/, () => {
	cadastroVagaPage.clicarBtnSalvarVaga();
});

Then(/^devo receber uma confirmação de que a vaga foi criada$/, () => {
	mainPage.validarToastConfirmacaoNovaVagaCriada()
});




And(/^digito um idVaga válido no campo de pesquisa$/, () => {
	mainPage.preencherCampoPesquisarVaga()
});

When(/^clico no botão buscar$/, () => {
	mainPage.clicarBtnBuscarVaga()
});

Then(/^valido se retornou a vaga correta$/, () => {
	mainPage.validarVagaBuscada();
});
