import { token } from "../../../support/commands";


const API_BASE = Cypress.env('API_BASE');

export default class UsuarioService{

  listarUsuarios(pagina, tamanho){
    return cy.request({
        method: 'GET',
        url: `${API_BASE}/usuario/listAllUsers`,
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

  recuperarImagemUsuarios(email){
    return cy.request({
        method: 'GET',
        url: `${API_BASE}/usuario`,
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        qs: {
          email: email,
        },
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

  atualizarUsuario(cargo, idUsuario, body){
    return cy.request({
        method: 'PUT',
        url: `${API_BASE}/usuario/${idUsuario}`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        qs: {
          cargo: cargo,
        },
        body: body,
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

  

  deletarUsuario(idUsuario){
    return cy.request({
        method: 'DELETE',
        url: `${API_BASE}/usuario/${idUsuario}`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

  adicionarUsuario(body){
    return cy.request({
        method: 'POST',
        url: `${API_BASE}/auth/register`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        body: body,
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

}