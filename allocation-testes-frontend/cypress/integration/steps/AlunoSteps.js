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




  ///////////////////////////////
 /// TESTES - Endpoint Aluno ///
///////////////////////////////

Given(/^que estou na página inicial$/, () => {
	cy.visit("http://vemser-dbc.dbccompany.com.br:39000/vemser/allocation-front/")
});

And(/^que estou logado como Administrador$/, () => {
	loginPage.fazerLoginComAdm();
});


And(/^clico no Menu$/, () => {
	mainPage.clicarBtnMenu()
});

And(/^clico na opção Alunos$/, () => {
	mainPage.clicarBtnAlunos();
});

And(/^clico no botão Cadastrar Aluno$/, () => {
	alunosPage.clicarCadastrarAluno()
});

And(/^preencho o campo Nome do aluno com um nome válido$/, () => {
	cadastroAlunoPage.preencherCampoNomeDoAluno(randomNomeCompleto)
});

And(/^preencho o campo Telefone do aluno com um telefone válido$/, () => {
	cadastroAlunoPage.preencherCampoTelefoneAluno("83999887766")
});

And(/^preencho o campo Cidade do aluno com uma cidade válida$/, () => {
	cadastroAlunoPage.preencherCampoCidadeAluno(randomCidade)
});

And(/^preencho o campo Estado do aluno com um estado válido$/, () => {
	cadastroAlunoPage.preencherCampoEstadoAluno(randomEstado)
});

And(/^preencho o campo Email do aluno com um email válido$/, () => {
	cadastroAlunoPage.preencherCampoEmailAluno(randomEmail)
});

And(/^preencho o campo idPrograma do aluno com um idPrograma válido$/, () => {
	cadastroAlunoPage.preencherCampoIdProgramaAluno("420")
});

And(/^preencho o campo descrição do aluno com uma descrição válida$/, () => {
	cadastroAlunoPage.preencherCampoDescricaoAluno(randomDescricao)
});

When(/^clico no botão salvar aluno$/, () => {
	cadastroAlunoPage.clicarBtnSalvarAluno()
});

Then(/^devo receber uma confirmação que o aluno foi criado$/, () => {
	alunosPage.validarToastConfirmacaoNovoAlunoCriado()
});


And(/^devo buscar o aluno criado e deletar para limpar o banco$/, () => {
	basePage.tempo(2000)
	alunosPage.preencherCampoPesquisarDashAlunos(randomNomeCompleto);
	alunosPage.clicarBtnBuscar();
	basePage.tempo(2000)
	alunosPage.clicarDeletarAluno()
	basePage.tempo(2000)
});

////////////////////////////////////////////



And(/^crio um aluno completo$/, () => {
	cadastroAlunoPage.criarUmAlunoCompleto(randomNomeCompleto, "83999887766", randomCidade, randomEstado, randomEmail, "420", randomDescricao)
});

When(/^busco e edito a area do aluno para QA$/, () => {
	basePage.tempo(2000)
	alunosPage.preencherCampoPesquisarDashAlunos(randomNomeCompleto);
	alunosPage.clicarBtnBuscar();
	basePage.tempo(2000)
	alunosPage.clicarBtnEditar();
	cadastroAlunoPage.clicarBtnAreaAluno()
	cadastroAlunoPage.clicarBtnAreaQa()
	cadastroAlunoPage.clicarBtnSalvarAluno()
});


Then(/^devo receber uma confirmação que o aluno foi editado$/, () => {
	alunosPage.validarToastConfirmacaoAlunoEditado()
});

And(/^devo buscar o aluno editado e deletar para limpar o banco$/, () => {
	basePage.tempo(2000)
	alunosPage.preencherCampoPesquisarAlunos(randomNomeCompleto);
	alunosPage.clicarBtnBuscarAlunosPage();
	basePage.tempo(2000)
	alunosPage.clicarDeletarAlunoPage()
});
