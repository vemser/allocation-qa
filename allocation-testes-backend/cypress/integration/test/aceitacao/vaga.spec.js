import ProgramaService from '../../service/aceitacao/programa.service';
import VagaService from '../../service/aceitacao/vaga.service';

const vagaService = new VagaService();

const programaService = new ProgramaService();
const programaPayload = require('../../../fixtures/programa.payload.json')


////////////////////////////////////////////////////////
/////////////////// CENÁRIOS POSITIVOS /////////////////
////////////////////////////////////////////////////////

context('Vaga - Cenários Positivos', () => {

  it('PUT - Editar vaga por id', () => {
    cy.allure()
    .epic('Testes de endpoint - Vaga')
    .feature('Cenários Positivos')
    .story('PUT - Editar um vaga no banco de dados')
    .severity('critical')
    .step('Cria um Programa')
    programaService.adicionarPrograma(programaPayload)
    .then(response => {
      cy.wrap(response.body).as('programa')
    })

    cy.allure()
    .step('Criar uma Vaga')
    cy.get('@programa').then(programa => {
    vagaService.adicionarVaga(programa.idPrograma)
    .then(response => {
      cy.wrap(response.body).as('vaga')
    })
      })

    cy.allure()
    .step('Valida editar uma vaga')
    cy.get('@vaga').then(vaga => {
      vagaService.atualizarVaga(vaga.idVaga, vaga.idPrograma)
      .should((response) => {
        expect(response.status).to.eq(201)
        //expect(response.body.situacao).to.eq("FECHADO")
      })
    })

    cy.allure()
    .step('Deleta vaga criada')
    cy.get('@vaga').then(vaga => 
      vagaService.deletarVaga(vaga.idVaga))
  
    cy.allure()
    .step('Deleta programa criado')
    cy.get('@programa').then(programa => 
      programaService.deletarPrograma(programa.idPrograma))
  
    });

  it('GET - Listar todos vagas cadastrados', () => {
    cy.allure()
    .epic('Testes de endpoint - Vaga')
    .feature('Cenários Positivos')
    .story('GET - Listar todos vagas cadastrados')
    .severity('critical')
    .step('Lista vagas')
    vagaService.listarVagas("0", "10")
    .should((response) =>{
      expect(response.status).to.eq(200)
    });
  });

  it('DELETE - Remover um vaga através do id', () => {
    cy.allure()
    .epic('Testes de endpoint - Vaga')
    .feature('Cenários Positivos')
    .story('DELETE - Remover um vaga através do id')
    .severity('critical')
    .step('Cria um Programa')
    programaService.adicionarPrograma(programaPayload)
    .then(response => {
      cy.wrap(response.body).as('programa')
    })

    cy.allure()
    .step('Criar uma Vaga')
    cy.get('@programa').then(programa => {
    vagaService.adicionarVaga(programa.idPrograma)
    .then(response => {
      cy.wrap(response.body).as('vaga')
    })
      })

    cy.allure()
    .step('valida Deletar vaga criada')
    cy.get('@vaga')
    .then(vaga => 
      vagaService.deletarVaga(vaga.idVaga)
      .should((response) => {
        expect(response.status).to.eq(204)
      }));
    });

  it('POST - Adicionar um vaga na aplicação', () => {
    cy.allure()
    .epic('Testes de endpoint - Vaga')
    .feature('Cenários Positivos')
    .story('POST - Adicionar um vaga na aplicação')
    .severity('critical')
    .step('Cria um Programa')
    programaService.adicionarPrograma(programaPayload)
    .then(response => {
      cy.wrap(response.body).as('programa')
    })

    cy.allure()
    .step('Valida Criar uma Vaga')
    cy.get('@programa').then(programa => {
    vagaService.adicionarVaga(programa.idPrograma)
    .should((response) => {
      expect(response.status).to.eq(201)
    }).then(response => {
      cy.wrap(response.body).as('vaga')
    })
      })

    cy.allure()
    .step('Deleta vaga criado')
    cy.get('@vaga').then(vaga => 
      vagaService.deletarVaga(vaga.idVaga))
  
    cy.allure()
    .step('Deleta programa criado')
    cy.get('@programa').then(programa => 
      programaService.deletarPrograma(programa.idPrograma))
  
    })

});
