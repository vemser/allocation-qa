import ProgramaService from '../../service/aceitacao/programa.service';
import AlunoService from '../../service/aceitacao/aluno.service';


const alunoService = new AlunoService();

const programaService = new ProgramaService();
const programaPayload = require('../../../fixtures/programa.payload.json')


////////////////////////////////////////////////////////
/////////////////// CENÁRIOS POSITIVOS /////////////////
////////////////////////////////////////////////////////

context('Aluno - Cenários Positivos', () => {

  it('PUT - Editar aluno por id', () => {
    cy.allure()
    .epic('Testes de endpoint - Aluno')
    .feature('Cenários Positivos')
    .story('PUT - Editar um aluno no banco de dados')
    .severity('critical')
    .step('Cria um Programa')
    programaService.adicionarPrograma(programaPayload)
    .then(response => {
      cy.wrap(response.body).as('programa')
    })

    cy.allure()
    .step('Criar uma Aluno')
    cy.get('@programa').then(programa => {
    alunoService.adicionarAluno(programa.idPrograma)
    .then(response => {
      cy.wrap(response.body).as('aluno')
    })
      })

    cy.allure()
    .step('Valida editar uma aluno')
    cy.get('@aluno').then(aluno => {
      alunoService.atualizarAluno(aluno.idAluno, aluno.idPrograma)
      .should((response) => {
        expect(response.status).to.eq(201)
      })
    })

    cy.allure()
    .step('Deleta aluno criada')
    cy.get('@aluno').then(aluno => 
      alunoService.deletarAluno(aluno.idAluno))
  
    cy.allure()
    .step('Deleta programa criado')
    cy.get('@programa').then(programa => 
      programaService.deletarPrograma(programa.idPrograma))
  
    });

  it('GET - Listar todos alunos cadastrados', () => {
    cy.allure()
    .epic('Testes de endpoint - Aluno')
    .feature('Cenários Positivos')
    .story('GET - Listar todos alunos cadastrados')
    .severity('critical')
    .step('Lista alunos')
    alunoService.listarAlunos("0", "10")
    .should((response) =>{
      expect(response.status).to.eq(200)
    });
  });

  it.only('DELETE - Remover um aluno através do id', () => {
    cy.allure()
    .epic('Testes de endpoint - Aluno')
    .feature('Cenários Positivos')
    .story('DELETE - Remover um aluno através do id')
    .severity('critical')
    .step('Cria um Programa')
    programaService.adicionarPrograma(programaPayload)
    .then(response => {
      cy.wrap(response.body).as('programa')
    })

    cy.allure()
    .step('Criar uma Aluno')
    cy.get('@programa').then(programa => {
    alunoService.adicionarAluno(programa.idPrograma)
    .then(response => {
      cy.wrap(response.body).as('aluno')
    })
      })

    cy.allure()
    .step('valida Deletar aluno criada')
    cy.get('@aluno')
    .then(aluno => 
      alunoService.deletarAluno(aluno.idAluno)
      .should((response) => {
        expect(response.status).to.eq(204)
      }))
    
    cy.allure()
    .step('Deleta programa criado')
    cy.get('@aluno').then(aluno2 => 
      programaService.deletarPrograma(aluno2.idPrograma))
      
    });

  it('POST - Adicionar um aluno na aplicação', () => {
    cy.allure()
    .epic('Testes de endpoint - Aluno')
    .feature('Cenários Positivos')
    .story('POST - Adicionar um aluno na aplicação')
    .severity('critical')
    .step('Cria um Programa')
    programaService.adicionarPrograma(programaPayload)
    .then(response => {
      cy.wrap(response.body).as('programa')
    })

    cy.allure()
    .step('Valida Criar uma Aluno')
    cy.get('@programa').then(programa => {
    alunoService.adicionarAluno(programa.idPrograma)
    .should((response) => {
      expect(response.status).to.eq(201)
    }).then(response => {
      cy.wrap(response.body).as('aluno')
    })
      })

    cy.allure()
    .step('Deleta aluno criado')
    cy.get('@aluno').then(aluno => 
      alunoService.deletarAluno(aluno.idAluno))
  
    cy.allure()
    .step('Deleta programa criado')
    cy.get('@aluno').then(aluno2 => 
      programaService.deletarPrograma(aluno2.idPrograma))
  
    })

});
