/// <reference types="cypress" />


import BasePage from "./BasePage";
const basePage = new BasePage();

// MAPEAMENTO DE ELEMENTOS
let campoNomeAluno = "#nome";
let campoTelefoneAluno = "#telefone"
let campoCidadeAluno = "#cidade"
let campoEstadoAluno = "#estado"
let campoEmailAluno = "#email"
let capoIdPrograma = "#idPrograma"
let campoDescricaoAluno = "#descricao"
let btnAreaAluno = "#area"
let btnAreaQa = "#menu-area > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1bepd21 > ul > li:nth-child(3)"
let btnStatusAluno = "#situacao"
let btnSalvarAluno = "#form > div.MuiBox-root.css-7eri5g > button"




export default class CadastroAlunoPage{
    
    clicarBtnAreaAluno(){
        basePage.click(btnAreaAluno)
    }

    clicarBtnAreaQa(){
        basePage.click(btnAreaQa)
    }

    preencherCampoNomeDoAluno(randomNomeAluno){
        basePage.preencherCampo(campoNomeAluno, randomNomeAluno)
    }

    preencherCampoTelefoneAluno(randomTelefoneAluno){
        basePage.preencherCampo(campoTelefoneAluno, randomTelefoneAluno)
    }


    preencherCampoCidadeAluno(randomCidadeAluno){
        basePage.preencherCampo(campoCidadeAluno, randomCidadeAluno)
    }

    preencherCampoEstadoAluno(randomEstadoAluno){
        basePage.preencherCampo(campoEstadoAluno, randomEstadoAluno)
    }

    preencherCampoEmailAluno(randomEmailAluno){
        basePage.preencherCampo(campoEmailAluno, randomEmailAluno)
    }

    preencherCampoIdProgramaAluno(randomIdProgramaAluno){
        basePage.preencherCampo(capoIdPrograma, randomIdProgramaAluno)
    }

    preencherCampoDescricaoAluno(randomDescricaoAluno){
        basePage.preencherCampo(campoDescricaoAluno, randomDescricaoAluno)
    }

    clicarBtnSalvarAluno(){
        basePage.click(btnSalvarAluno)
    }
   

    criarUmAlunoCompleto(randomNomeAluno, randomTelefoneAluno, randomCidadeAluno, randomEstadoAluno, randomEmailAluno, randomIdProgramaAluno,randomDescricaoAluno){
        this.preencherCampoNomeDoAluno(randomNomeAluno);
        this.preencherCampoTelefoneAluno(randomTelefoneAluno);
        this.preencherCampoCidadeAluno(randomCidadeAluno);
        this.preencherCampoEstadoAluno(randomEstadoAluno);
        this.preencherCampoEmailAluno(randomEmailAluno);
        this.preencherCampoIdProgramaAluno(randomIdProgramaAluno);
        this.preencherCampoDescricaoAluno(randomDescricaoAluno);
        this.clicarBtnSalvarAluno();
    }
    


}

