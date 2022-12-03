/// <reference types="cypress" />


import BasePage from "./BasePage";
import LoginPage from "./LoginPage";

const basePage = new BasePage();
const loginpage = new LoginPage();

let btnCriarVaga = ".MuiButton-containedSizeMedium";
let btnMenu = "#basic-button"
let btnUsuarios = ".MuiList-root > a:nth-child(2) > li:nth-child(1)"



export default class MainPage{

    clicarBtnMenu(){
        basePage.click(btnMenu)
    }

    clicarBtnUsuarios(){
        basePage.click(btnUsuarios)
    }


    clicarCriarVaga(){
        basePage.click(btnCriarVaga)
    }




}

