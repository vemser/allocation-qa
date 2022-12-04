import AvaliacaoService from '../../service/aceitacao/avaliacao.service';


const avaliacaoService = new AvaliacaoService();


////////////////////////////////////////////////////////
/////////////////// CENÁRIOS NEGATIVOS /////////////////
////////////////////////////////////////////////////////

context('Avaliacao - Cenários Negativos', () => {

  it('PUT - Tentar Editar avaliacao com idAvaliacao inexistente', () => {
    cy.allure()
    .epic('Testes de endpoint - Avaliacao')
    .feature('Cenários Negativos')
    .story('PUT - Tentar Editar um avaliacao com idAvaliacao inexistente')
    .severity('normal')
    cy.allure()
    .step('Tentar Validar editar uma avaliacao com idAvaliacao inexistente')
      avaliacaoService.atualizarAvaliacao("99999", "32", "jhennyfer.sobrinho@dbccompany.com.br") 
      .should((response) =>{
        expect(response.status).to.eq(400);
        expect(response.body.message).to.eq("Avaliação não encontrada!")
    })
  })

  it('PUT - Tentar Editar avaliacao com idVaga inexistente', () => {
    cy.allure()
    .epic('Testes de endpoint - Avaliacao')
    .feature('Cenários Negativos')
    .story('PUT - Tentar Editar um avaliacao com idVaga inexistente')
    .severity('normal')
    cy.allure()
    .step('Tentar Valida editar uma avaliacao com idVaga inexistente')
      avaliacaoService.atualizarAvaliacao("35", "999999", "jhennyfer.sobrinho@dbccompany.com.br") 
      .should((response) =>{
        expect(response.status).to.eq(400);
        expect(response.body.message).to.eq("Vaga não encontrada!")
    })
  })

  it('PUT - Tentar Editar avaliacao com emailAluno inexistente', () => {
    cy.allure()
    .epic('Testes de endpoint - Avaliacao')
    .feature('Cenários Negativos')
    .story('PUT - Tentar Editar um avaliacao com emailAluno inexistente')
    .severity('normal')
    cy.allure()
    .step('Tentar Valida editar uma avaliacao com emailAluno inexistente')
      avaliacaoService.atualizarAvaliacao("35", "32", "jhennyfer.sobrinho1@dbccompany.com.br") 
      .should((response) =>{
        expect(response.status).to.eq(400);
        expect(response.body.message).to.eq("Aluno não encontrado!")
    })
  })

  it('DELETE - Tentar Remover um avaliacao através do idAvaliacao inexistente', () => {
    cy.allure()
    .epic('Testes de endpoint - Avaliacao')
    .feature('Cenários Negativos')
    .story('DELETE - Tentar Remover um avaliacao através do idAvaliacao inexistente')
    .severity('normal')
    cy.allure()
    .step('Tentar Remover um avaliacao através do idAvaliacao inexistente')
      avaliacaoService.deletarAvaliacao("999999")
      .should((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.message).to.eq("Avaliação não encontrada!")
      })
  })

  it('POST - Tenta Adicionar um avaliacao na aplicação com idVaga inexistente', () => {
    cy.allure()
    .epic('Testes de endpoint - Avaliacao')
    .feature('Cenários Negativos')
    .story('POST - Tenta Adicionar um avaliacao na aplicação com idVaga inexistente')
    .severity('normal')

    // valida criar uma avaliacao
    cy.allure()
    .step('Tenta Adicionar um avaliacao na aplicação com idVaga inexistente')
      avaliacaoService.adicionarAvaliacao("99999999", "jhennyfer.sobrinho1@dbccompany.com.br")
      .should((response) => {
        expect(response.status).to.eq(400)
        expect(response.body.message).to.eq("Vaga não encontrada!")
    })
    
  })

});
