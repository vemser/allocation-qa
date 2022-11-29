import ContratoService from '../../service/contrato/contrato.service';

const contratoService = new ContratoService();


context('Contratos - Cenários Positivos', () => {

  it('Vaga - Validar contrato Vaga', () => {
    cy.allure()
    .epic('Testes de Contrato')
    .feature('Cenários Positivos')
    .story('GET - Validar contrato GET/vaga')
    .severity('critical')
    .step('Valida o contrato')
    contratoService.contratoVagaRequest("0","10","vaga.get.contrato")
  });
  

  it('Usuario - Validar contrato Usuario', () => {
    cy.allure()
    .epic('Testes de Contrato')
    .feature('Cenários Positivos')
    .story('GET - Validar contrato GET/usuario/listAllUsers')
    .severity('critical')
    .step('Valida o contrato')
    contratoService.contratoUsuarioRequest("0","10","usuario.get.contrato")
  });


  it('Programa - Validar contrato Programa', () => {
    cy.allure()
    .epic('Testes de Contrato')
    .feature('Cenários Positivos')
    .story('GET - Validar contrato GET/programa')
    .severity('critical')
    .step('Valida o contrato')
    contratoService.contratoProgramaRequest("0","10","programa.get.contrato")
  });

  it('Cliente - Validar contrato Cliente', () => {
    cy.allure()
    .epic('Testes de Contrato')
    .feature('Cenários Positivos')
    .story('GET - Validar contrato GET/cliente')
    .severity('critical')
    .step('Valida o contrato')
    contratoService.contratoClienteRequest("0","10","cliente.get.contrato")
  });

  it('Avaliacao - Validar contrato Avaliacao', () => {
    cy.allure()
    .epic('Testes de Contrato')
    .feature('Cenários Positivos')
    .story('GET - Validar contrato GET/avaliacao')
    .severity('critical')
    .step('Valida o contrato')
    contratoService.contratoAvaliacaoRequest("0","10","avaliacao.get.contrato")
  });


  it('Aluno - Validar contrato Aluno', () => {
    cy.allure()
    .epic('Testes de Contrato')
    .feature('Cenários Positivos')
    .story('GET - Validar contrato GET/aluno')
    .severity('critical')
    .step('Valida o contrato')
    contratoService.contratoAlunoRequest("0","10","aluno.get.contrato")
  });



});