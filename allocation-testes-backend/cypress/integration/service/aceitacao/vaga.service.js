import { token } from "../../../support/commands";


const API_BASE = Cypress.env('API_BASE');

export default class VagaService{

  
  atualizarVaga(id, body){
    return cy.request({
        method: 'PUT',
        url: `${API_BASE}/vaga/${id}`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        body: body,
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

  deletarVaga(id){
    return cy.request({
        method: 'DELETE',
        url: `${API_BASE}/vaga/deletar`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        qs: {
          id: id,
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

  listarVagas(pagina, tamanho){
    return cy.request({
        method: 'GET',
        url: `${API_BASE}/vaga`,
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        qs: {
          pagina: pagina,
          tamanho: tamanho,
        },
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

  
}