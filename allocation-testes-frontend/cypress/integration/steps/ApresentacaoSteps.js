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
import AlunosPage from '../pages/AlunosPage';
import CadastroAlunoPage from '../pages/CadastroAlunoPage';


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
const alunosPage = new AlunosPage;
const cadastroAlunoPage = new CadastroAlunoPage;



const randomFirstName = faker.name.firstName();
const randomLastName = faker.name.lastName();
const randomNomeCompleto = randomFirstName+" "+randomLastName;
const randomEmail = randomFirstName + "." + randomLastName + "@dbccompany.com.br";
const randomDescricao = "Descrição do Aluno aqui";
const randomCidade = faker.address.city();
const randomEstado = faker.address.state();

export let meuIdVaga;

let campoPainelAlunos = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiContainer-root.MuiContainer-maxWidthLg.css-1qsxih2 > div > div.MuiBox-root.css-1u7fakx > a:nth-child(2) > button"
let campoCodigoDaVaga = "#idVaga"
let campoCodigoAvaliacao = "#idAvaliacao"
let campoDataReserva = "#dataReserva"
let campoDescricao = "#descricao"
let btnSalvarReserva = "#form > div.MuiBox-root.css-7eri5g > button"

  /////////////////////////////
 /// TESTES - APRESENTAÇÃO ///
/////////////////////////////

Given(/^que estou na página inicial$/, () => {
	cy.visit("http://vemser-dbc.dbccompany.com.br:39000/vemser/allocation-front/")
});

And(/^que estou logado como Administrador$/, () => {
	loginPage.fazerLoginComAdm();
});

When(/^busco o código de uma vaga$/, () => {
	cy.get('#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-ygck11 > div.MuiBox-root.css-1x2w3xw > div > div:nth-child(1) > div.MuiBox-root.css-q0h9ri > div.MuiBox-root.css-0 > p > strong').invoke('text').as('idVaga1')
});

Then(/^devo receber uma confirmação do código da vaga$/, () => {
	cy.get("@idVaga1").then((response) => {
		response = meuIdVaga;
	})
});


And(/^clico no painel de Alunos$/, () => {
	basePage.click(campoPainelAlunos)
});

And(/^busco pelo aluno Green Nienow$/, () => {
	alunosPage.preencherCampoPesquisarDashAlunos("Green Nienow");
	alunosPage.clicarBtnBuscar()
});

And(/^clico em reservar$/, () => {
	basePage.tempo(2000)
	alunosPage.clicarBtnReservarAluno()
});

And(/^preencho o campo Codigo da Avaliação com o número 87$/, () => {
	basePage.preencherCampo(campoCodigoAvaliacao, 87)
});

And(/^preencho o campo Codigo da Vaga com o número 283$/, () => {
	basePage.preencherCampo(campoCodigoDaVaga, 283)
});

When(/^preencho o campo Data de Reserva com uma data Valida$/, () => {
	basePage.preencherCampo(campoDataReserva, "2023-12-05")
});


When(/^preencho o campo Descrição com uma descrição Valida$/, () => {
	basePage.preencherCampo(campoDescricao, "Uma Descrição")
});


Then(/^clico em salvar$/, () => {
	basePage.click(btnSalvarReserva)
});

Then(/^devo receber uma confirmação de reserva do aluno$/, () => {
	mainPage.validarToastConfirmacaoReservaAluno()
});

