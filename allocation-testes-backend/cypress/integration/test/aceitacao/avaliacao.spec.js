import AvaliacaoService from '../../service/aceitacao/avaliacao.service';

const avaliacaoService = new AvaliacaoService();
const avaliacaoPayload = require('../../../fixtures/avaliacao.payload.json')
const avaliacao2Payload = require('../../../fixtures/avaliacao2.payload.json')

////////////////////////////////////////////////////////
/////////////////// CENÁRIOS POSITIVOS /////////////////
////////////////////////////////////////////////////////

context('Avaliacao - Cenários Positivos', () => {

  it('PUT - Editar avaliacao', () => {
    cy.allure()
    .epic('Testes de endpoint - Avaliacao')
    .feature('Cenários Positivos')
    .story('PUT - Editar um avaliacao no banco de dados')
    .severity('critical')
    .step('Cria um Avaliacao')
    avaliacaoService.adicionarAvaliacao(avaliacaoPayload)
    .then(response => {
      cy.wrap(response.body).as('avaliacao')
    })

    cy.allure()
    .step('Atualiza avaliacao criado')
    cy.get('@avaliacao').then(avaliacao => {
      avaliacaoService.atualizarAvaliacao(avaliacao.idAvaliacao, avaliacao2Payload)
      .should((response) => {
        expect(response.status).to.eq(201)
      })

      cy.allure()
      .step('Deleta avaliacao criado')
    cy.get('@avaliacao').then(avaliacao => {
      avaliacaoService.deletarAvaliacao(avaliacao.idAvaliacao)
      });
    }); 
  });

  it('GET - Listar todos avaliacaos cadastrados', () => {
    cy.allure()
    .epic('Testes de endpoint - Avaliacao')
    .feature('Cenários Positivos')
    .story('GET - Listar todos avaliacaos cadastrados')
    .severity('critical')
    .step('Lista avaliacaos')
    avaliacaoService.listarAvaliacaos("0", "10")
    .should((response) =>{
      expect(response.status).to.eq(200)
    });
  });

  it('DELETE - Remover um avaliacao através do id', () => {
    cy.allure()
    .epic('Testes de endpoint - Avaliacao')
    .feature('Cenários Positivos')
    .story('DELETE - Remover um avaliacao através do id')
    .severity('critical')
    .step('Cria um Avaliacao')
    avaliacaoService.adicionarAvaliacao(avaliacaoPayload)
    .then(response => {
      cy.wrap(response.body).as('avaliacao')
    });

    cy.allure()
    .step('Deleta avaliacao criado')
    cy.get('@avaliacao')
    .then(avaliacao => 
      avaliacaoService.deletarAvaliacao(avaliacao.idAvaliacao)
      .should((response) => {
        expect(response.status).to.eq(204)
      }));
    });

  it('POST - Adicionar um avaliacao na aplicação', () => {
    cy.allure()
    .epic('Testes de endpoint - Avaliacao')
    .feature('Cenários Positivos')
    .story('POST - Adicionar um avaliacao na aplicação')
    .severity('critical')
    // .step('Cria um avaliacao')
    // alunoService.adicionarAluno(idPrograma)
    // .should((response))
    
    .step('Cria um avaliacao')
    avaliacaoService.adicionarAvaliacao(avaliacaoPayload)
    .should((response) => {
      expect(response.status).to.eq(201)
    }).then(response => {
      cy.wrap(response.body).as('avaliacao')
    })

    cy.allure()
    .step('Deleta avaliacao criado')
    cy.get('@avaliacao').then(avaliacao => 
      avaliacaoService.deletarAvaliacao(avaliacao.idAvaliacao))
  })

});
