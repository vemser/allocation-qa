/// <reference types="cypress" />


import BasePage from "./BasePage";
import LoginPage from "./LoginPage";

const basePage = new BasePage();
const loginpage = new LoginPage();

// MAPEAMENTO DE ELEMENTOS
let btnCadastrarUsuario = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-1v0frl8 > div.MuiBox-root.css-ckyhk3 > a > button";
let campoPesquisar = "#pesquisar"
let btnDeletarUsuario = "tr.css-1qynwco:nth-child(1) > td:nth-child(5) > div:nth-child(1) > button:nth-child(2) > svg:nth-child(1) > path:nth-child(1)"
let toastDeConfirmacaoUsuarioCriado = ".Toastify__toast-body > div:nth-child(2)";
let btnConfirmDelete = "body > div.MuiDialog-root.MuiModal-root.css-126xj0f > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div.MuiDialogActions-root.MuiDialogActions-spacing.css-14b29qc > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textSuccess.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-root.MuiButton-text.MuiButton-textSuccess.MuiButton-sizeMedium.MuiButton-textSizeMedium.css-1i4al35";
let btnBuscar = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-1v0frl8 > div.MuiBox-root.css-k9piiy > form > button:nth-child(2)"
let btnEditar = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-1v0frl8 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-1aj1g2c > table > tbody > tr > td:nth-child(5) > div > button:nth-child(1) > svg"
let campoCodigoUsuario = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-1v0frl8 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-1aj1g2c > table > tbody > tr > th";
let campoNomeUsuario = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-1v0frl8 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-1aj1g2c > table > tbody > tr > td:nth-child(2)";
let campoEmailUsuario = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-1v0frl8 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-1aj1g2c > table > tbody > tr > td:nth-child(3)";
let campoTipoUsuario = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-1v0frl8 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-1aj1g2c > table > tbody > tr > td:nth-child(4)"



export default class UsuariosPage{

    clicarCadastrarUsuario(){
        basePage.click(btnCadastrarUsuario)
    }

    preencherCampoPesquisar(emailusuario){
        basePage.preencherCampo(campoPesquisar, emailusuario)
    }

    clicarBtnBuscar(){
        basePage.click(btnBuscar)
    }

    clicarDeletarUsuario(){
        basePage.click(btnDeletarUsuario)
        basePage.click(btnConfirmDelete)
    }

    clicarBtnEditar(){
        basePage.click(btnEditar)
    }

    validarToastConfirmacaoNovoUsuarioCriado(){
        basePage.validarVisibilidade(toastDeConfirmacaoUsuarioCriado)
        basePage.validarText(toastDeConfirmacaoUsuarioCriado, "Usuário cadastrado com sucesso!")
    }

    validarEdicaoNomeUsuario(){
        basePage.validarText(toastDeConfirmacaoUsuarioCriado, "Usuário editado com sucesso!")
        basePage.validarText(campoCodigoUsuario, "226");
        basePage.validarText(campoNomeUsuario, "Teste QA B MUDADO");
        basePage.validarText(campoEmailUsuario, "teste2@dbccompany.com.br");
    }

    validarEdicaoTipoUsuario(){
        basePage.validarText(toastDeConfirmacaoUsuarioCriado, "Usuário editado com sucesso!")
        basePage.validarText(campoTipoUsuario, "Gestor")
    }



}

