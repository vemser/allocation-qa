/// <reference types="cypress" />


import BasePage from "./BasePage";
import LoginPage from "./LoginPage";

const basePage = new BasePage();
const loginpage = new LoginPage();

let btnCadastrarUsuario = ".css-ufnt5v > a:nth-child(3) > button:nth-child(1)";
let campoPesquisar = "#pesquisar"
let btnDeletarUsuario = "tr.css-1qynwco:nth-child(1) > td:nth-child(5) > div:nth-child(1) > button:nth-child(2) > svg:nth-child(1) > path:nth-child(1)"
let btnConfirmDelete = "body > div.MuiDialog-root.MuiModal-root.css-126xj0f > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div.MuiDialogActions-root.MuiDialogActions-spacing.css-14b29qc > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textSuccess.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-root.MuiButton-text.MuiButton-textSuccess.MuiButton-sizeMedium.MuiButton-textSizeMedium.css-1i4al35";
let btnFiltrar = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-1v0frl8 > form > div.MuiBox-root.css-ufnt5v > button:nth-child(2)"


export default class UsuariosPage{

    clicarCadastrarUsuario(){
        basePage.click(btnCadastrarUsuario)
    }

    preencherCampoPesquisar(nomeUsuario){
        basePage.preencherCampo(campoPesquisar, nomeUsuario)
    }

    clicarBtnFiltrar(){
        basePage.click(btnFiltrar)
    }

    clicarDeletarUsuario(){
        basePage.click(btnDeletarUsuario)
        basePage.click(btnConfirmDelete)
    }

}

