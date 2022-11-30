import { token } from "../../../support/commands";


const API_BASE = Cypress.env('API_BASE');

export default class ClienteService{

  listarClientes(pagina, tamanho){
    return cy.request({
        method: 'GET',
        url: `${API_BASE}/cliente`,
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

  atualizarCliente(idCliente, body){
    return cy.request({
        method: 'PUT',
        url: `${API_BASE}/cliente/${idCliente}`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
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

  adicionarCliente(body){
    return cy.request({
        method: 'POST',
        url: `${API_BASE}/cliente`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        body: body,
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

}