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
    avaliacaoService.adicionarAvaliacao("ATIVO", avaliacaoPayload)
    .then(response => {
      cy.wrap(response.body).as('avaliacao')
    })

    cy.allure()
    .step('Atualiza avaliacao criado')
    cy.get('@avaliacao').then(avaliacao => {
      avaliacaoService.atualizarAvaliacao("INATIVO", avaliacao.idAvaliacao, avaliacao2Payload)
      .should((response) => {
        expect(response.status).to.eq(200)
      })

      cy.allure()
      .step('Deleta avaliacao criado')
    cy.get('@avaliacao').then(avaliacao => {
      avaliacaoService.deletarAvaliacao(avaliacao.idAvaliacao)
      });
    }); 
  });

  it('GET - Listar todos avaliacoes cadastrados', () => {
    cy.allure()
    .epic('Testes de endpoint - Avaliacao')
    .feature('Cenários Positivos')
    .story('GET - Listar todos avaliacoes cadastrados')
    .severity('critical')
    .step('Lista avaliacoes')
    avaliacaoService.listarAvaliacoes("0", "10")
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
    avaliacaoService.adicionarAvaliacao("ATIVO", avaliacaoPayload)
    .then(response => {
      cy.wrap(response.body).as('avaliacao')
    });

    cy.allure()
    .step('Deleta avaliacao criado')
    cy.get('@avaliacao')
    .then(avaliacao => 
      avaliacaoService.deletarAvaliacao(avaliacao.idAvaliacao)
      .should((response) => {
        expect(response.status).to.eq(200)
      }));
    });

  it('POST - Adicionar um avaliacao na aplicação', () => {
    cy.allure()
    .epic('Testes de endpoint - Avaliacao')
    .feature('Cenários Positivos')
    .story('POST - Adicionar um avaliacao na aplicação')
    .severity('critical')
    .step('Cria um avaliacao')
    avaliacaoService.adicionarAvaliacao("ATIVO", avaliacaoPayload)
    .should((response) => {
      expect(response.status).to.eq(200)
    }).then(response => {
      cy.wrap(response.body).as('avaliacao')
    })

    cy.allure()
    .step('Deleta avaliacao criado')
    cy.get('@avaliacao').then(avaliacao => 
      avaliacaoService.deletarAvaliacao(avaliacao.idAvaliacao))
  })

});
