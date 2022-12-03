/// <reference types="cypress" />


import BasePage from "./BasePage";
import LoginPage from "./LoginPage";

const basePage = new BasePage();
const loginpage = new LoginPage();

let btnCriarVaga = ".MuiButton-containedSizeMedium";
let btnMenu = "#basic-button";
let btnAlunos = ".MuiList-root > a:nth-child(1) > li:nth-child(1)";
let btnUsuarios = ".MuiList-root > a:nth-child(2) > li:nth-child(1)";
let btnClientes = ".MuiList-root > a:nth-child(3) > li:nth-child(1)";
let btnVagas = ".MuiList-root > a:nth-child(4) > li:nth-child(1)";
let btnProgramas = ".MuiList-root > a:nth-child(5) > li:nth-child(1)";
let btnAvaliacoes = ".MuiList-root > a:nth-child(6) > li:nth-child(1)";
let btnReservaEAlocacao = ".MuiList-root > a:nth-child(7) > li:nth-child(1)";


export default class MainPage{

    clicarBtnMenu(){
        basePage.click(btnMenu)
    }

    clicarBtnUsuarios(){
        basePage.click(btnUsuarios)
    }

    clicarBtnClientes(){
        basePage.click(btnClientes)
    }


    clicarCriarVaga(){
        basePage.click(btnCriarVaga)
    }




}

