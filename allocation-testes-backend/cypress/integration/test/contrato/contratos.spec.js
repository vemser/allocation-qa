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

  it('Vaga - Validar contrato Vaga por idVaga', () => {
    cy.allure()
    .epic('Testes de Contrato')
    .feature('Cenários Positivos')
    .story('GET - Validar contrato GET/vaga/{idVaga}')
    .severity('critical')
    .step('Valida o contrato')
    contratoService.contratoVagaPorIdVagaRequest("283","vaga.get.contrato")
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

  it('Usuario - Validar contrato Usuario por Nome', () => {
    cy.allure()
    .epic('Testes de Contrato')
    .feature('Cenários Positivos')
    .story('GET - Validar contrato GET/usuario/listarPorNome')
    .severity('normal')
    .step('Valida o contrato')
    contratoService.contratoUsuarioPorNomeRequest("0","10","teste", "usuarioPorNome.get.contrato")
  });

  it('Usuario - Validar contrato Usuario por Email', () => {
    cy.allure()
    .epic('Testes de Contrato')
    .feature('Cenários Positivos')
    .story('GET - Validar contrato GET/usuario/listarPorEmail')
    .severity('normal')
    .step('Valida o contrato')
    contratoService.contratoUsuarioPorEmailRequest("0","10","teste@dbccompany.com.br", "usuarioPorEmail.get.contrato")
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


  it('Avaliacao - Validar contrato Avaliacao por IdAvaliação', () => {
    cy.allure()
    .epic('Testes de Contrato')
    .feature('Cenários Positivos')
    .story('GET - Validar contrato GET/avaliacao/{idAvaliacao}')
    .severity('normal')
    .step('Valida o contrato')
    contratoService.contratoAvaliacaoPorIdAvaliacaoRequest("27", "avaliacaoPorIdAvaliacao.get.contrato")
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

  it('Aluno - Validar contrato Alunos disponiveis', () => {
    cy.allure()
    .epic('Testes de Contrato')
    .feature('Cenários Positivos')
    .story('GET - Validar contrato GET/aluno/disponiveis')
    .severity('critical')
    .step('Valida o contrato')
    contratoService.contratoAlunosDisponiveisRequest("0", "10","alunosDisponiveis.get.contrato")
  });

  it('Aluno - Validar contrato Alunos por nome', () => {
    cy.allure()
    .epic('Testes de Contrato')
    .feature('Cenários Positivos')
    .story('GET - Validar contrato GET/aluno/nome')
    .severity('critical')
    .step('Valida o contrato')
    contratoService.contratoAlunosPorNomeRequest("0", "10", "teste","alunosPorNome.get.contrato")
  });

  it('Aluno - Validar contrato Alunos por email', () => {
    cy.allure()
    .epic('Testes de Contrato')
    .feature('Cenários Positivos')
    .story('GET - Validar contrato GET/aluno/email')
    .severity('critical')
    .step('Valida o contrato')
    contratoService.contratoAlunosPorEmailRequest("0", "10", "teste","alunosPorEmail.get.contrato")
  });

  it('Tecnologia - Validar contrato Tecnologia', () => {
    cy.allure()
    .epic('Testes de Contrato')
    .feature('Cenários Positivos')
    .story('GET - Validar contrato GET/tecnologia/tecnologia-busca')
    .severity('critical')
    .step('Valida o contrato')
    contratoService.contratoTecnologiaRequest("java", "0", "10", "tecnologiaTecnologiaBusca.get.contrato")
  });



});