import AlunoService from '../../service/aceitacao/aluno.service';


const alunoService = new AlunoService();


////////////////////////////////////////////////////////
/////////////////// CENÁRIOS NEGATIVOS /////////////////
////////////////////////////////////////////////////////

context('Aluno - Cenários Negativos', () => {

  it('PUT - Tentar Editar aluno por id inexistente', () => {
    cy.allure()
    .epic('Testes de endpoint - Aluno')
    .feature('Cenários Negativos')
    .story('PUT - Tentar Editar um aluno por id inexistente')
    .severity('normal')
    cy.allure()
    .step('Valida Tentar Editar um Aluno')
    alunoService.atualizarAluno("99999", "1")
    .should((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq("Aluno não encontrado")
      })
    })

  it('DELETE - Tentar Remover um aluno através do id inexistente', () => {
    cy.allure()
    .epic('Testes de endpoint - Aluno')
    .feature('Cenários Negativos')
    .story('DELETE - Tentar Remover um aluno através do id inexistente')
    .severity('normal')
    cy.allure()
    .step('Deleta aluno criado')
    alunoService.deletarAluno("999999")
    .should((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq("Aluno não encontrado")
    })
  })

  it('POST - Tentar Adicionar um aluno na aplicação com idPrograma inexistente', () => {
    cy.allure()
    .epic('Testes de endpoint - Aluno')
    .feature('Cenários Negativos')
    .story('POST - Tentar Adicionar um aluno na aplicação com idPrograma inexistente')
    .severity('normal')
    cy.allure()
    .step('Tentar Adicionar um aluno na aplicação com idPrograma inexistente')
    alunoService.adicionarAluno("999999")
    .should((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq("Programa não encontrado")
    })
    })

  it('POST - Tentar Adicionar um aluno na aplicação sem nome', () => {
    cy.allure()
    .epic('Testes de endpoint - Aluno')
    .feature('Cenários Negativos')
    .story('POST - Tentar Adicionar um aluno na aplicação sem nome')
    .severity('normal')
    cy.allure()
    .step('Tentar Adicionar um aluno na aplicação sem nome')
    alunoService.adicionarAlunoSemNome("50")
    .should((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.errors[0]).to.eq("nome: Nome não pode ser vazio ou nulo.")
    })
    })
 

});
