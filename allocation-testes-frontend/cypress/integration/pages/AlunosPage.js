/// <reference types="cypress" />


import BasePage from "./BasePage";
import LoginPage from "./LoginPage";

const basePage = new BasePage();
const loginpage = new LoginPage();

// MAPEAMENTO DE ELEMENTOS
let btnCadastrarAluno = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-q7fr4s > div.MuiBox-root.css-147wmnz > a > button";
let campoPesquisar = "#pesquisa"
let btnDeletarAluno = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-ygck11 > div.MuiBox-root.css-98cpu4 > div > div > div.MuiBox-root.css-q0h9ri > div.MuiBox-root.css-blvggq > button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-nmt3cl > svg > path"
let toastDeConfirmacaoAlunoCriado = ".Toastify__toast-body > div:nth-child(2)";
let btnConfirmDelete = "body > div.MuiDialog-root.MuiModal-root.css-126xj0f > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div.MuiDialogActions-root.MuiDialogActions-spacing.css-14b29qc > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textSuccess.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-root.MuiButton-text.MuiButton-textSuccess.MuiButton-sizeMedium.MuiButton-textSizeMedium.css-1i4al35";
let btnBuscar = "#form > div.MuiBox-root.css-18bbsnd > button:nth-child(1)"
let btnEditar = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-q7fr4s > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-1aj1g2c > table > tbody > tr > td:nth-child(5) > button:nth-child(1) > svg > path"
let campoCodigoAluno = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-q7fr4s > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-1aj1g2c > table > tbody > tr > td:nth-child(2)";
let campoNomeAluno = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-q7fr4s > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-1aj1g2c > table > tbody > tr > td:nth-child(2)";
let campoEmailAluno = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-q7fr4s > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-1aj1g2c > table > tbody > tr > td:nth-child(3)";
let campoAreaAluno = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-q7fr4s > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-1aj1g2c > table > tbody > tr > td:nth-child(4)"



export default class AlunosPage{

    clicarCadastrarAluno(){
        basePage.click(btnCadastrarAluno)
    }

    preencherCampoPesquisar(nomeAluno){
        basePage.preencherCampo(campoPesquisar, nomeAluno)
    }

    clicarBtnBuscar(){
        basePage.click(btnBuscar)
    }

    clicarDeletarAluno(){
        basePage.click(btnDeletarAluno)
        basePage.click(btnConfirmDelete)
    }

    clicarBtnEditar(){
        basePage.click(btnEditar)
    }

    validarToastConfirmacaoNovoAlunoCriado(){
        basePage.validarVisibilidade(toastDeConfirmacaoAlunoCriado)
        basePage.validarText(toastDeConfirmacaoAlunoCriado, "Aluno cadastrado com sucesso!")
    }


}

