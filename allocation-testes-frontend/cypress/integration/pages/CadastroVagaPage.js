/// <reference types="cypress" />


import BasePage from "./BasePage";
const basePage = new BasePage();

// MAPEAMENTO DE ELEMENTOS
let campoNomeVaga = "#nome";
let campoIdCliente = "#idCliente"
let campoIdPrograma = "#idPrograma";
let campoNumeroDeVagas = "#quantidade";
let campoDataAbertura = "#dataAbertura";
let campoDataFechamento = "#dataFechamento";
let campoSituacao = "#situacao";
let campoObservacoes = "#observacoes";
let btnAberto = "li.MuiButtonBase-root:nth-child(1)";
let btnFechado = "li.MuiButtonBase-root:nth-child(2)";
let btnSalvar = "#form > div.MuiBox-root.css-il9pzb > div > button"




export default class CadastroVagaPage{
    
    preencherCampoNomeDaVaga(){
        basePage.preencherCampo(campoNomeVaga, "Vaga QA Senior")
    }

    preencherCampoIdCliente(){
        basePage.preencherCampo(campoIdCliente, 307)
    }

    preencherCampoIdPrograma(){
        basePage.preencherCampo(campoIdPrograma, 421)
    }

    preencherCampoNumeroDeVagas(){
        basePage.preencherCampo(campoNumeroDeVagas, "10")
    }

    preencherCampoDataAbertura(){
        basePage.preencherCampo(campoDataAbertura, "2023-02-01")
    }

    preencherCampoDataFechamento(){
        basePage.preencherCampo(campoDataFechamento, "2023-04-01")
    }

    clicarBtnSituacao(){
        basePage.click(campoSituacao);
    }

    clicarBtnAberto(){
        basePage.click(btnAberto);
    }

    clicarBtnSalvarVaga(){
        basePage.click(btnSalvar)
    }
    


    preencherVagaCompleta(){
        basePage.preencherCampo(campoNomeVaga, "Nome de Vaga Exemplo")
        basePage.preencherCampo(campoIdCliente, 307)
        basePage.preencherCampo(campoIdPrograma, 421)
        basePage.preencherCampo(campoNumeroDeVagas, "10")
        basePage.preencherCampo(campoDataAbertura, "2023-02-01")
        basePage.preencherCampo(campoDataFechamento, "2023-04-01")
        basePage.click(campoSituacao);
        basePage.click(btnAberto)
        basePage.preencherCampo(campoObservacoes, "Exemplo de Observação")
        basePage.click(btnSalvar)
    }

}

