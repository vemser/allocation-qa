/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import BasePage from "./BasePage";
const basePage = new BasePage();

let campoNomeCompleto = "#nomeCompleto";
let campoEmail = "#email";
let campoSenha = "#senha";
let campoSenhaIgual = "#senhaIgual";
let btnEnviarFoto = "label.MuiButtonBase-root";
let btnVoltarPagina = "button.MuiButtonBase-root:nth-child(1)";
let btnSalvar = "button.MuiButtonBase-root:nth-child(2)";

const randomFirstName = faker.name.firstName();
const randomLastName = faker.name.lastName();
const randomNomeCompleto = randomFirstName+" "+randomLastName;
const randomEmail = randomFirstName + "." + randomLastName + "@dbccompany.com.br";
const randomPassword = faker.internet.password();



export default class CadastroUsuarioPage{
    
    preencherCampoNomeCompleto(){
        basePage.preencherCampo(campoNomeCompleto, randomNomeCompleto)
    }

    preencherCampoEmail(){
        basePage.preencherCampo(campoEmail, randomEmail)
    }

    preencherCampoSenha(){
        basePage.preencherCampo(campoSenha, randomPassword)
    }

    preencherCampoSenhaIgual(){
        basePage.preencherCampo(campoSenhaIgual, randomPassword)
    }

    clicarNoBtnSalvar(){
        basePage.click(btnSalvar)
    }
}

