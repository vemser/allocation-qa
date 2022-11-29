import { token } from "../../../support/commands";


const API_BASE = Cypress.env('API_BASE');

export default class VagaService{

  
  atualizarVaga(idPessoa, pessoa){
    return cy.request({
        method: 'PUT',
        url: `${API_BASE}/vaga/${idPessoa}`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        body: pessoa,
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

  deletarVaga(idVaga){
    return cy.request({
        method: 'DELETE',
        url: `${API_BASE}/vaga/deletar`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        qs: {
          idVaga: idVaga,
        },
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

  adicionarVaga(situacao, body){
    return cy.request({
        method: 'POST',
        url: `${API_BASE}/vaga`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        qs: {
          situacao: situacao,
        },
        body: body,
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

  buscarVaga(){
    return cy.request({
        method: 'GET',
        url: `${API_BASE}/vaga`,
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

  
}