/// <reference types="cypress" />


import BasePage from "./BasePage";
const basePage = new BasePage();


// MAPEAMENTO DE ELEMENTOS
let campoNome = "#nome";
let campoDescricao = "#descricao";
let campoData = "#dataTermino"
let selectSituacao = "#situacao"
let selectAberto = "#menu-situacao > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1bepd21 > ul > li.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.css-1k70x2h"
let btnSalvar = "#form > div.MuiBox-root.css-7eri5g > button";
let textInformeNomePrograma = "#nome-helper-text"
let textInformeDataTermino = "#dataTermino-helper-text"



export default class CadastroProgramaPage{
    
    preencherCampoNome(randomNome){
        basePage.preencherCampo(campoNome, randomNome)
    }

    preencherCampoDescricao(randomDescricao){
        basePage.preencherCampo(campoDescricao, randomDescricao)
    }

    preencherCampoData(){
        basePage.preencherCampo(campoData, "2023-02-01")
    }

    selecionarSituacaoAberto(){
        basePage.click(selectSituacao);
        basePage.click(selectAberto)
    }

    clicarBtnSalvar(){
        basePage.click(btnSalvar)
    }

    validarCamposObrigatoriosCadastroPrograma(){
        basePage.validarText(textInformeNomePrograma, "Por favor, informe o nome do programa");
        basePage.validarText(textInformeDataTermino, "Por favor, informe a data de término");
    }

    cadastrarUmProgramaCompleto(){
        this.preencherCampoNome("Nome do meu Programa");
        this.preencherCampoDescricao("Descrição do meu Programa");
        this.preencherCampoData();
        this.selecionarSituacaoAberto();
        this.clicarBtnSalvar()
    }

    




}

