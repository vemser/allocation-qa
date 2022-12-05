/// <reference types="cypress" />


import BasePage from "./BasePage";
import LoginPage from "./LoginPage";

const basePage = new BasePage();
const loginpage = new LoginPage();

// MAPEAMENTO DE ELEMENTOS
let btnCriarVaga = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-ygck11 > div.MuiBox-root.css-1x9ekzo > div > a > button" // ".MuiButton-containedSizeMedium";
let btnMenu = "#basic-button";
let btnPainelDeVagas = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiContainer-root.MuiContainer-maxWidthLg.css-1qsxih2 > div > div.MuiBox-root.css-1u7fakx > a:nth-child(1) > button"; // a.sc-dkrFOg:nth-child(1) > button:nth-child(1)
let btnAlunos = ".MuiList-root > a:nth-child(3) > li:nth-child(1)";
let btnUsuarios = ".MuiList-root > a:nth-child(4) > li:nth-child(1)";
let btnClientes = ".MuiList-root > a:nth-child(5) > li:nth-child(1)";
let btnProgramas = ".MuiList-root > a:nth-child(6) > li:nth-child(1)";
let btnAvaliacoes = ".MuiList-root > a:nth-child(7) > li:nth-child(1)";
let btnReservaEAlocacao = ".MuiList-root > a:nth-child(8) > li:nth-child(1)";
let toastDeConfirmacaoVagaCriada = ".Toastify__toast-body > div:nth-child(2)";
let campoPesquisarVaga = "#pesquisa"
let btnBuscarVaga = "#form > div.MuiBox-root.css-18bbsnd > button:nth-child(1)"
let campoIdVagaBuscada = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-ygck11 > div.MuiBox-root.css-1x2w3xw > div > div > div.MuiBox-root.css-q0h9ri > div.MuiBox-root.css-0 > p > strong"
let campoNomeVagaBuscada = "#root > div.MuiGrid-root.css-ncd5iv > div.MuiBox-root.css-ygck11 > div.MuiBox-root.css-1x2w3xw > div > div > div.MuiBox-root.css-tdqk15 > p:nth-child(1)"




export default class MainPage{

    clicarBtnAlunos(){
        basePage.click(btnAlunos)
    }

    clicarBtnMenu(){
        basePage.click(btnMenu)
    }

    clicarBtnUsuarios(){
        basePage.click(btnUsuarios)
    }

    clicarBtnClientes(){
        basePage.click(btnClientes)
    }

    clicarBtnPainelDeVagas(){
        basePage.click(btnPainelDeVagas)
    }


    clicarCriarVaga(){
        basePage.click(btnCriarVaga)
    }

    clicarBtnProgramas(){
        basePage.click(btnProgramas)
    }

    validarToastConfirmacaoNovaVagaCriada(){
        basePage.validarVisibilidade(toastDeConfirmacaoVagaCriada)
        basePage.validarText(toastDeConfirmacaoVagaCriada, "Vaga cadastrada com sucesso!")
    }

    preencherCampoPesquisarVaga(){
        basePage.preencherCampo(campoPesquisarVaga, "283")
    }

    clicarBtnBuscarVaga(){
        basePage.click(btnBuscarVaga)
    }

    validarVagaBuscada(){
        basePage.validarText(campoIdVagaBuscada, "283")
        basePage.validarText(campoNomeVagaBuscada, "Vaga QA Senior")
    }


}

