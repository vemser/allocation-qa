import AvaliacaoService from '../../service/aceitacao/avaliacao.service';
import ProgramaService from '../../service/aceitacao/programa.service';
import VagaService from '../../service/aceitacao/vaga.service';
import AlunoService from '../../service/aceitacao/aluno.service';


const avaliacaoService = new AvaliacaoService();
const programaService = new ProgramaService();
const vagaService = new VagaService();
const alunoService = new AlunoService();

const programaPayload = require('../../../fixtures/programa.payload.json')

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

  it.only('POST - Adicionar um avaliacao na aplicação', () => {
    cy.allure()
    .epic('Testes de endpoint - Avaliacao')
    .feature('Cenários Positivos')
    .story('POST - Adicionar um avaliacao na aplicação')
    .severity('critical')

    // cria um programa
    .step('Cria um Programa')
    programaService.adicionarPrograma(programaPayload)
    .then(response => {
      cy.wrap(response.body).as('programa')
    })

    // cria uma vaga
    cy.allure()
    .step('Criar uma Vaga')
    cy.get('@programa').then(programa => {
    vagaService.adicionarVaga(programa.idPrograma)
    .then(response => {
      cy.wrap(response.body).as('vaga')
    })
      })

    // cria um aluno
    cy.allure()
    .step('Criar uma Aluno')
    cy.get('@programa').then(programa => {
    alunoService.adicionarAluno(programa.idPrograma)
    .then(response => {
      cy.wrap(response.body).as('aluno')
    })
      })

    
    // cria uma avaliacao
    cy.allure()
    .step('Cria um avaliacao')
    cy.get('@aluno').then(aluno => {
      avaliacaoService.adicionarAvaliacao(aluno.idAluno, aluno.email)
      .should((response) => {
        expect(response.status).to.eq(201)
      }).then(response => {
        cy.wrap(response.body).as('avaliacao')
      })
    })
    
    // deleta avaliacao
    cy.allure()
    .step('Deleta avaliacao criado')
    cy.get('@avaliacao').then(avaliacao => 
      avaliacaoService.deletarAvaliacao(avaliacao.idAvaliacao))

    // deleta aluno
    cy.allure()
    .step('Deleta aluno criado')
    cy.get('@aluno').then(aluno => 
      alunoService.deletarAluno(aluno.idAluno))
    
    // deleta vaga
    cy.allure()
    .step('Deleta vaga criado')
    cy.get('@vaga').then(vaga => 
      vagaService.deletarVaga(vaga.idVaga))
    
    // deleta programa
    cy.allure()
    .step('Deleta programa criado')
    cy.get('@vaga').then(vaga => 
      programaService.deletarPrograma(vaga.idPrograma))

  })

});
