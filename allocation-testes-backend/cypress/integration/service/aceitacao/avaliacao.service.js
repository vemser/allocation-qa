import { token } from "../../../support/commands";


const API_BASE = Cypress.env('API_BASE');

export default class AvaliacaoService{

  listarAvaliacoes(page, tamanho){
    return cy.request({
        method: 'GET',
        url: `${API_BASE}/avaliacao`,
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        qs: {
          pagina: page,
          tamanho: tamanho,
        },
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

  atualizarAvaliacao(id, body){
    return cy.request({
        method: 'PUT',
        url: `${API_BASE}/avaliacao/${id}`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        // qs: {
        //   situacao: situacao,
        // },
        body: body,
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

  deletarAvaliacao(idAvaliacao){
    return cy.request({
        method: 'DELETE',
        url: `${API_BASE}/avaliacao/${idAvaliacao}`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

  adicionarAvaliacao(body){
    return cy.request({
        method: 'POST',
        url: `${API_BASE}/avaliacao`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        // qs: {
        //   situacao: situacao,
        // },
        body: body,
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

}