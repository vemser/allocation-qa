import { token } from "../../../support/commands";

const API_BASE = Cypress.env('API_BASE');



export default class VagaService{

  
  atualizarVaga(idVaga, idPrograma, meuEmailCliente){
    return cy.request({
        method: 'PUT',
        url: `${API_BASE}/vaga/${idVaga}`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        body: `{
          "nome": "QA",
          "quantidade": 10,
          "quantidadeAlocados": 10,
          "idPrograma": ${idPrograma},
          "situacao": "FECHADO",
          "dataAbertura": "2022-12-20",
          "dataFechamento": "2022-12-26",
          "dataCriacao": "2022-12-01",
          "observacoes": "Seguir conceitos de programação como: Alta coesão, Baixo acoplamento, e componentização.",
          "emailCliente": "${meuEmailCliente}"
        }`,
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

  deletarVaga(idVaga){
    return cy.request({
        method: 'DELETE',
        url: `${API_BASE}/vaga/${idVaga}`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

  adicionarVaga(idPrograma, meuEmailCliente){
    return cy.request({
        method: 'POST',
        url: `${API_BASE}/vaga`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        body: `{
          "nome": "QA",
          "quantidade": 10,
          "quantidadeAlocados": 0,
          "idPrograma": ${idPrograma},
          "situacao": "ABERTO",
          "dataAbertura": "2022-12-20",
          "dataFechamento": "2022-12-26",
          "dataCriacao": "2022-12-01",
          "observacoes": "Seguir conceitos de programação como: Alta coesão, Baixo acoplamento, e componentização.",
          "emailCliente": "${meuEmailCliente}"
        }`,
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