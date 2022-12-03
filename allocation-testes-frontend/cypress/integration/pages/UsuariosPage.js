/// <reference types="cypress" />


import BasePage from "./BasePage";
import LoginPage from "./LoginPage";

const basePage = new BasePage();
const loginpage = new LoginPage();

let btnCadastrarUsuario = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-1v0frl8 > div.MuiBox-root.css-ckyhk3 > a > button";
let campoPesquisar = "#pesquisar"
let btnDeletarUsuario = "tr.css-1qynwco:nth-child(1) > td:nth-child(5) > div:nth-child(1) > button:nth-child(2) > svg:nth-child(1) > path:nth-child(1)"
let toastDeConfirmacaoUsuarioCriado = ".Toastify__toast-body > div:nth-child(2)";

let btnConfirmDelete = "body > div.MuiDialog-root.MuiModal-root.css-126xj0f > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div.MuiDialogActions-root.MuiDialogActions-spacing.css-14b29qc > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textSuccess.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-root.MuiButton-text.MuiButton-textSuccess.MuiButton-sizeMedium.MuiButton-textSizeMedium.css-1i4al35";
let btnBuscar = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-1v0frl8 > div.MuiBox-root.css-k9piiy > form > button:nth-child(2)"


export default class UsuariosPage{

    clicarCadastrarUsuario(){
        basePage.click(btnCadastrarUsuario)
    }

    preencherCampoPesquisar(nomeUsuario){
        basePage.preencherCampo(campoPesquisar, nomeUsuario)
    }

    clicarBtnBuscar(){
        basePage.click(btnBuscar)
    }

    clicarDeletarUsuario(){
        basePage.click(btnDeletarUsuario)
        basePage.click(btnConfirmDelete)
    }

    validarToastConfirmacaoNovoUsuarioCriado(){
        basePage.validarVisibilidade(toastDeConfirmacaoUsuarioCriado)
        basePage.validarText(toastDeConfirmacaoUsuarioCriado, "Usuário cadastrado com sucesso!")
    }

}

