import { token } from "../../../support/commands";

const API_BASE = Cypress.env('API_BASE');



export default class AlunoService{

  
  atualizarAluno(idAluno, idPrograma){
    return cy.request({
        method: 'PUT',
        url: `${API_BASE}/aluno/${idAluno}`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        body: `{
          "nome": "Teste Aluno de QA",
          "email": "teste.alunoQA@dbccompany.com.br",
          "idPrograma": ${idPrograma},
          "area": "FRONTEND",
          "cidade": "John People",
          "estado": "Paraíba",
          "telefone": "91313-1313",
          "descricao": "agora tenho descrição",
          "situacao": "ALOCADO",
          "tecnologias": [
            "java"
          ]
        }`,
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

  deletarAluno(idAluno){
    return cy.request({
        method: 'DELETE',
        url: `${API_BASE}/aluno/${idAluno}`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

  adicionarAluno(idPrograma){
    return cy.request({
        method: 'POST',
        url: `${API_BASE}/aluno`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        body: `{
          "nome": "Teste Aluno de QA",
          "email": "teste.alunoQA@dbccompany.com.br",
          "idPrograma": ${idPrograma},
          "area": "FRONTEND",
          "cidade": "John People",
          "estado": "Paraíba",
          "telefone": "99595-1313",
          "descricao": "xxxx",
          "situacao": "ALOCADO",
          "tecnologias": [
            "java"
          ]
        }`,
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

  adicionarAlunoSemNome(idPrograma){
    return cy.request({
        method: 'POST',
        url: `${API_BASE}/aluno`,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        body: `{
          "email": "teste.alunoQA@dbccompany.com.br",
          "idPrograma": ${idPrograma},
          "area": "FRONTEND",
          "cidade": "John People",
          "estado": "Paraíba",
          "telefone": "99595-1313",
          "descricao": "xxxx",
          "situacao": "ALOCADO",
          "tecnologias": [
            "java"
          ]
        }`,
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

  listarAlunos(pagina, tamanho){
    return cy.request({
        method: 'GET',
        url: `${API_BASE}/aluno`,
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

  listarAlunosDisponiveis(){
    return cy.request({
        method: 'GET',
        url: `${API_BASE}/aluno/disponiveis`,
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        failOnStatusCode: false,
    }).as('response').get('@response')
  }

  
}