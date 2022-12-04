import ProgramaService from '../../service/aceitacao/programa.service';

const programaService = new ProgramaService();
const programaPayload = require('../../../fixtures/programa.payload.json')
const programa2Payload = require('../../../fixtures/programa2.payload.json')

////////////////////////////////////////////////////////
/////////////////// CENÁRIOS NEGATIVOS /////////////////
////////////////////////////////////////////////////////

context('Programa - Cenários Negativos', () => {

  it('PUT - Tentar Editar programa com idPrograma inexistente', () => {
    cy.allure()
    .epic('Testes de endpoint - Programa')
    .feature('Cenários Negativos')
    .story('PUT - Tentar Editar programa com idPrograma inexistente')
    .severity('critical')
    .step('Tentar Editar programa com idPrograma inexistente')
    
      programaService.atualizarPrograma("999999", programa2Payload)
      .should((response) => {
        expect(response.status).to.eq(400)
        expect(response.body.message).to.eq("Programa não encontrado")
    }); 
  });


  it('DELETE - Tentar Remover um programa através do idPrograma Inexistente', () => {
    cy.allure()
    .epic('Testes de endpoint - Programa')
    .feature('Cenários Negativos')
    .story('DELETE - Tentar Remover um programa através do idPrograma Inexistente')
    .severity('critical')
    .step('Tentar Remover um programa através do idPrograma Inexistente')
      programaService.deletarPrograma("999999")
      .should((response) => {
        expect(response.status).to.eq(400)
        expect(response.body.message).to.eq("Programa não encontrado")
      });
    });
});
