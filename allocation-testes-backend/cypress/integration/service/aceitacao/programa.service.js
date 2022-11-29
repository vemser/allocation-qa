import { token } from "../../../support/commands";


const API_BASE = Cypress.env('API_BASE');

export default class ProgramaService{

  listarProgramas(page, tamanho){
    return cy.request({
        method: 'GET',
        url: `${API_BASE}/programa`,
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        qs: {
          pagina: page,
          tamanhoDasPaginas: tamanho,
        },
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

  atualizarPrograma(situacao, idPrograma, body){
    return cy.request({
        method: 'PUT',
        url: `${API_BASE}/programa/${idPrograma}`,
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

  deletarPrograma(idPrograma){
    return cy.request({
        method: 'DELETE',
        url: `${API_BASE}/programa/${idPrograma}`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

  adicionarPrograma(situacao, body){
    return cy.request({
        method: 'POST',
        url: `${API_BASE}/programa`,
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

}