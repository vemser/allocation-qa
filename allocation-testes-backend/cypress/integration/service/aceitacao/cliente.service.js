import { token } from "../../../support/commands";


const API_BASE = Cypress.env('API_BASE');

export default class ClienteService{

  listarClientes(page, tamanho){
    return cy.request({
        method: 'GET',
        url: `${API_BASE}/cliente`,
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

  atualizarCliente(situacao, id, body){
    return cy.request({
        method: 'PUT',
        url: `${API_BASE}/cliente/${id}`,
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

  deletarCliente(idCliente){
    return cy.request({
        method: 'DELETE',
        url: `${API_BASE}/cliente/${idCliente}`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

  adicionarCliente(situacao, body){
    return cy.request({
        method: 'POST',
        url: `${API_BASE}/cliente`,
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