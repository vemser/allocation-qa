import ProgramaService from '../../service/aceitacao/programa.service';

const programaService = new ProgramaService();
const programaPayload = require('../../../fixtures/programa.payload.json')
const programa2Payload = require('../../../fixtures/programa2.payload.json')

////////////////////////////////////////////////////////
/////////////////// CENÁRIOS NEGATIVOS /////////////////
////////////////////////////////////////////////////////

context('Programa - Cenários Negativos', () => {

  it('PUT - Tentar Editar programa com id inexistente', () => {
    cy.allure()
    .epic('Testes de endpoint - Programa')
    .feature('Cenários Positivos')
    .story('PUT - Tentar Editar programa com id inexistente')
    .severity('critical')
    .step('Cria um Programa')
    programaService.adicionarPrograma("ABERTO", programaPayload)
    .then(response => {
      cy.wrap(response.body).as('programa')
    })

    cy.allure()
    .step('Tenta atualizar programa com id inexistente')
    cy.get('@programa').then(programa => {
      programaService.atualizarPrograma("FECHADO", "9999", programa2Payload)
      .should((response) => {
        expect(response.status).to.eq(404)
      })

      cy.allure()
      .step('Deleta programa criado')
    cy.get('@programa').then(programa => {
      programaService.deletarPrograma(programa.idPrograma)
      });
    }); 
  });


  it('DELETE - Tenta Remover um programa através do id inexistente', () => {
    cy.allure()
    .epic('Testes de endpoint - Programa')
    .feature('Cenários Positivos')
    .story('DELETE - Tenta Remover um programa através do id inexistente')
    .severity('critical')
    .step('Tenta deletar programa com id inexistente')
    programaService.deletarPrograma("9999")
      .should((response) => {
        expect(response.status).to.eq(404)
      });
    });


  it('POST - Tenta Adicionar um programa na aplicação sem body', () => {
    cy.allure()
    .epic('Testes de endpoint - Programa')
    .feature('Cenários Positivos')
    .story('POST - Adicionar um programa na aplicação')
    .severity('critical')
    .step('Cria um programa')
    programaService.adicionarPrograma("ABERTO", " ")
    .should((response) => {
      expect(response.status).to.eq(404)
    })
  })

});
