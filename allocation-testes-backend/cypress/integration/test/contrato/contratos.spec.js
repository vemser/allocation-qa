import ContratoService from '../../service/contrato/contrato.service';

const contratoService = new ContratoService();


context.only('Contratos - Cenários Positivos', () => {

  it('Programa - Validar contrato Get Programa', () => {
    cy.allure()
    .epic('Testes de Contrato')
    .feature('Cenários Positivos')
    .story('GET - Validar contrato Get Programa')
    .severity('critical')
    .step('Valida o contrato')
    contratoService.contratoProgramaRequest("0","10","programa.get.contrato")
  });

  it('Cliente - Validar contrato Get Cliente', () => {
    cy.allure()
    .epic('Testes de Contrato')
    .feature('Cenários Positivos')
    .story('GET - Validar contrato Get Cliente')
    .severity('critical')
    .step('Valida o contrato')
    contratoService.contratoClienteRequest("0","10","cliente.get.contrato")
  });

  it('Avaliacao - Validar contrato Get Avaliacao', () => {
    cy.allure()
    .epic('Testes de Contrato')
    .feature('Cenários Positivos')
    .story('GET - Validar contrato Get Avaliacao')
    .severity('critical')
    .step('Valida o contrato')
    contratoService.contratoAvaliacaoRequest("0","10","avaliacao.get.contrato")
  });

  it('Vaga - Validar contrato Get Vaga', () => {
    cy.allure()
    .epic('Testes de Contrato')
    .feature('Cenários Positivos')
    .story('GET - Validar contrato Get Vaga')
    .severity('critical')
    .step('Valida o contrato')
    contratoService.contratoVagaRequest("0","10","vaga.get.contrato")
  });


});