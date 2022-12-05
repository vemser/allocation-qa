/// <reference types="cypress" />


import BasePage from "./BasePage";

const basePage = new BasePage();

// MAPEAMENTO DE ELEMENTOS
let btnCadastrarPrograma = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-q7fr4s > div.MuiBox-root.css-4j9i0o > a > button";
let campoPesquisar = "#pesquisar"
let btnDeletarPrograma = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-q7fr4s > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-1aj1g2c > table > tbody > tr > td:nth-child(7) > button:nth-child(2) > svg > path"
let toastDeConfirmacaoProgramaCriado = ".Toastify__toast-body > div:nth-child(2)";
let btnConfirmDelete = "body > div.MuiDialog-root.MuiModal-root.css-126xj0f > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div.MuiDialogActions-root.MuiDialogActions-spacing.css-14b29qc > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textSuccess.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-root.MuiButton-text.MuiButton-textSuccess.MuiButton-sizeMedium.MuiButton-textSizeMedium.css-1i4al35";
let btnBuscar = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-q7fr4s > div.MuiBox-root.css-115pqq5 > form > div.MuiBox-root.css-18bbsnd > button:nth-child(1)"
export let campoCodigoPrograma = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-q7fr4s > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-1aj1g2c > table > tbody > tr > th";


export default class ProgramasPage{

    clicarCadastrarPrograma(){
        basePage.click(btnCadastrarPrograma)
    }

    preencherCampoPesquisar(nomePrograma){
        basePage.preencherCampo(campoPesquisar, nomePrograma)
    }

    clicarBtnBuscar(){
        basePage.click(btnBuscar)
    }

    clicarDeletarPrograma(){
        basePage.click(btnDeletarPrograma)
        basePage.click(btnConfirmDelete)
    }

    validarToastConfirmacaoNovoProgramaCriado(){
        basePage.validarVisibilidade(toastDeConfirmacaoProgramaCriado)
        basePage.validarText(toastDeConfirmacaoProgramaCriado, "Programa cadastrado com sucesso!")
    }


}

