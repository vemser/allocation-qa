import ProgramaService from '../../service/aceitacao/programa.service';

const programaService = new ProgramaService();
const programaPayload = require('../../../fixtures/programa.payload.json')
const programa2Payload = require('../../../fixtures/programa2.payload.json')

////////////////////////////////////////////////////////
/////////////////// CENÁRIOS POSITIVOS /////////////////
////////////////////////////////////////////////////////

context('Programa - Cenários Positivos', () => {

  it('PUT - Editar programa', () => {
    cy.allure()
    .epic('Testes de endpoint - Programa')
    .feature('Cenários Positivos')
    .story('PUT - Editar um programa no banco de dados')
    .severity('critical')
    .step('Cria um Programa')
    programaService.adicionarPrograma(programaPayload)
    .then(response => {
      cy.wrap(response.body).as('programa')
    })

    cy.allure()
    .step('Atualiza programa criado')
    cy.get('@programa').then(programa => {
      programaService.atualizarPrograma(programa.idPrograma, programa2Payload)
      .should((response) => {
        expect(response.status).to.eq(201)
      })

      cy.allure()
      .step('Deleta programa criado')
    cy.get('@programa').then(programa => {
      programaService.deletarPrograma(programa.idPrograma)
      });
    }); 
  });

  it('GET - Listar todos programas cadastrados', () => {
    cy.allure()
    .epic('Testes de endpoint - Programa')
    .feature('Cenários Positivos')
    .story('GET - Listar todos programas cadastrados')
    .severity('critical')
    .step('Lista programas')
    programaService.listarProgramas("0", "10")
    .should((response) =>{
      expect(response.status).to.eq(200)
    });
  });

  it('DELETE - Remover um programa através do id', () => {
    cy.allure()
    .epic('Testes de endpoint - Programa')
    .feature('Cenários Positivos')
    .story('DELETE - Remover um programa através do id')
    .severity('critical')
    .step('Cria um Programa')
    programaService.adicionarPrograma(programaPayload)
    .then(response => {
      cy.wrap(response.body).as('programa')
    });

    cy.allure()
    .step('Deleta programa criado')
    cy.get('@programa')
    .then(programa => 
      programaService.deletarPrograma(programa.idPrograma)
      .should((response) => {
        expect(response.status).to.eq(204)
      }));
    });

  it('POST - Adicionar um programa na aplicação', () => {
    cy.allure()
    .epic('Testes de endpoint - Programa')
    .feature('Cenários Positivos')
    .story('POST - Adicionar um programa na aplicação')
    .severity('critical')
    .step('Cria um programa')
    programaService.adicionarPrograma(programaPayload)
    .should((response) => {
      expect(response.status).to.eq(201)
    }).then(response => {
      cy.wrap(response.body).as('programa')
    })

    cy.allure()
    .step('Deleta programa criado')
    cy.get('@programa').then(programa => 
      programaService.deletarPrograma(programa.idPrograma))
  })


  // it.only('Limpa programa', () => {
  //   cy.allure()
  //   .step('limpa')
  //   for (let i = 5; i < 220; i++){
  //     programaService.deletarPrograma(i)
  //   }
  //   });

});
