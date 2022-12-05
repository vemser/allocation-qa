/// <reference types="cypress" />


import BasePage from "./BasePage";
import LoginPage from "./LoginPage";

const basePage = new BasePage();

// MAPEAMENTO DE ELEMENTOS
let btnCadastrarCliente = ".MuiButton-containedSuccess";
let campoPesquisar = "#pesquisar"
let toastDeConfirmacaoClienteCriado = ".Toastify__toast-body > div:nth-child(2)";
let btnFiltrar = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-q7fr4s > div.MuiBox-root.css-115pqq5 > form > div.MuiBox-root.css-18bbsnd > button:nth-child(1)";
let btnDeletarCliente = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-q7fr4s > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-1aj1g2c > table > tbody > tr > td:nth-child(6) > button:nth-child(2) > svg > path"
let btnConfirmDeleteCliente = "body > div.MuiDialog-root.MuiModal-root.css-126xj0f > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div.MuiDialogActions-root.MuiDialogActions-spacing.css-14b29qc > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textSuccess.MuiButton-sizeMedium.MuiButton-textSizeMedium.Mui-focusVisible.MuiButton-root.MuiButton-text.MuiButton-textSuccess.MuiButton-sizeMedium.MuiButton-textSizeMedium.css-1i4al35"
export let campoCodigoCliente = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-q7fr4s > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-1aj1g2c > table > tbody > tr > th"

export default class ClientesPage{

    clicarCadastrarCliente(){
        basePage.click(btnCadastrarCliente)
    }

    validarToastConfirmacaoNovoClienteCriado(){
        basePage.validarVisibilidade(toastDeConfirmacaoClienteCriado)
        basePage.validarText(toastDeConfirmacaoClienteCriado, "Cliente cadastrado com sucesso!")
    }

    preencherCampoPesquisar(emailUsuario){
        basePage.preencherCampo(campoPesquisar, emailUsuario)
    }

    clicarBtnFiltrar(){
        basePage.click(btnFiltrar)
    }

    clicarDeletarCliente(){
        basePage.click(btnDeletarCliente)
        basePage.click(btnConfirmDeleteCliente)
    }

}

