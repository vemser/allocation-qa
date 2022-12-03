/// <reference types="cypress" />


import BasePage from "./BasePage";
import LoginPage from "./LoginPage";

const basePage = new BasePage();
const loginpage = new LoginPage();

let btnCadastrarCliente = ".MuiButton-containedSuccess";
let campoPesquisar = "#pesquisar"
let toastDeConfirmacaoClienteCriado = ".Toastify__toast-body > div:nth-child(2)";
let btnFiltrar = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-1v0frl8 > form > div.MuiBox-root.css-ufnt5v > button:nth-child(2)";
let btnDeletarCliente = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-1v0frl8 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-1aj1g2c > table > tbody > tr:nth-child(1) > td:nth-child(6) > button:nth-child(2) > svg > path"
let btnConfirmDeleteCliente = "button.MuiButton-text:nth-child(2)"

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

