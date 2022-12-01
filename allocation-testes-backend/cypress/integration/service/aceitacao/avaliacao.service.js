import { token } from "../../../support/commands";


const API_BASE = Cypress.env('API_BASE');

export default class AvaliacaoService{

  listarAvaliacoes(pagina, tamanho){
    return cy.request({
        method: 'GET',
        url: `${API_BASE}/avaliacao`,
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

  atualizarAvaliacao(idAvaliacao, idVaga, emailAluno){
    return cy.request({
        method: 'PUT',
        url: `${API_BASE}/avaliacao/${idAvaliacao}`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        body: `{
          "idVaga": ${idVaga},
          "emailAluno": "${emailAluno}",
          "nota": 10,
          "descricao": "Excelente",
          "dataAvaliacao": "2022-12-24",
          "dataEntrevista": "2022-12-20",
          "dataResposta": "2022-12-22",
          "dataCriacao": "2022-11-30",
          "tipoAvaliacao": "INDIVIDUAL",
          "situacao": "AVALIADO"
        }`,
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

  adicionarAvaliacao(idVaga, emailAluno){
    return cy.request({
        method: 'POST',
        url: `${API_BASE}/avaliacao`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        body: `{
          "idVaga": ${idVaga},
          "emailAluno": "${emailAluno}",
          "nota": 9,
          "descricao": "Muito bom",
          "dataAvaliacao": "2022-12-24",
          "dataEntrevista": "2022-12-20",
          "dataResposta": "2022-12-22",
          "dataCriacao": "2022-11-30",
          "tipoAvaliacao": "INDIVIDUAL",
          "situacao": "AVALIADO"
        }`,
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

}