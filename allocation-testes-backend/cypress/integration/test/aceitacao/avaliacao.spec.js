import AvaliacaoService from '../../service/aceitacao/avaliacao.service';
import ClienteService from '../../service/aceitacao/cliente.service';
import ProgramaService from '../../service/aceitacao/programa.service';
import VagaService from '../../service/aceitacao/vaga.service';
import AlunoService from '../../service/aceitacao/aluno.service';


const clienteService = new ClienteService();
const avaliacaoService = new AvaliacaoService();
const programaService = new ProgramaService();
const vagaService = new VagaService();
const alunoService = new AlunoService();

const programaPayload = require('../../../fixtures/programa.payload.json')
const clientePayload = require('../../../fixtures/cliente.payload.json')
let meuEmailCliente;
let meuIdVaga;
let meuIdAvaliacao;

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
    
    // cria um cliente
    .step('Cria um Cliente')
    clienteService.adicionarCliente(clientePayload)
    .then(response => {
      cy.wrap(response.body).as('cliente')
      cy.get('@cliente').then(cliente => 
        meuEmailCliente = cliente.email
        )
    })

    // cria um programa
    cy.allure()
    .step('Cria um Programa')
    programaService.adicionarPrograma(programaPayload)
    .then(response => {
      cy.wrap(response.body).as('programa')
    })

    // cria uma vaga
    cy.allure()
    .step('Criar uma Vaga')
    cy.get('@programa').then(programa => {
    vagaService.adicionarVaga(programa.idPrograma, meuEmailCliente)
    .then(response => {
      cy.wrap(response.body).as('vaga')
      cy.get('@vaga').then(vaga => 
        meuIdVaga = vaga.idVaga
        )})
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
    .step('Valida Criar uma avaliacao')
    cy.get('@aluno').then(aluno => {
      avaliacaoService.adicionarAvaliacao(meuIdVaga, aluno.email)
      .then(response => {
        cy.wrap(response.body).as('avaliacao')
        cy.get('@avaliacao').then(avaliacao => 
          meuIdAvaliacao = avaliacao.idAvaliacao
          )
      })
    })

    // Valida editar uma avaliacao
    cy.allure()
    .step('Valida editar uma avaliacao')
    cy.get('@aluno').then(aluno => {
      avaliacaoService.atualizarAvaliacao(meuIdAvaliacao, meuIdVaga, aluno.email) // idAvaliacao, idVaga, emailAluno
      .should((response) =>{
        expect(response.status).to.eq(201)
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

    // deleta cliente
    cy.allure()
    .step('Deleta cliente criado')
    cy.get('@cliente').then(cliente => 
      clienteService.deletarCliente(cliente.idCliente))

  })

  it('GET - Listar todos avaliacaos cadastrados', () => {
    cy.allure()
    .epic('Testes de endpoint - Avaliacao')
    .feature('Cenários Positivos')
    .story('GET - Listar todos avaliacaos cadastrados')
    .severity('critical')
    .step('Lista avaliacaos')
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
    
    // cria um cliente
    .step('Cria um Cliente')
    clienteService.adicionarCliente(clientePayload)
    .then(response => {
      cy.wrap(response.body).as('cliente')
      cy.get('@cliente').then(cliente => 
        meuEmailCliente = cliente.email
        )
    })

    // cria um programa
    cy.allure()
    .step('Cria um Programa')
    programaService.adicionarPrograma(programaPayload)
    .then(response => {
      cy.wrap(response.body).as('programa')
    })

    // cria uma vaga
    cy.allure()
    .step('Criar uma Vaga')
    cy.get('@programa').then(programa => {
    vagaService.adicionarVaga(programa.idPrograma, meuEmailCliente)
    .then(response => {
      cy.wrap(response.body).as('vaga')
      cy.get('@vaga').then(vaga => 
        meuIdVaga = vaga.idVaga
        )})
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
    .step('Cria uma avaliacao')
    cy.get('@aluno').then(aluno => {
      avaliacaoService.adicionarAvaliacao(meuIdVaga, aluno.email)
      .then(response => {
        cy.wrap(response.body).as('avaliacao')
      })
    })
    
    // valida deleta avaliacao
    cy.allure()
    .step('Valida deletar avaliacao criada')
    cy.get('@avaliacao').then(avaliacao => 
      avaliacaoService.deletarAvaliacao(avaliacao.idAvaliacao)
      .should((response) => {
        expect(response.status).to.eq(204)
      }))

    // valida deletar aluno
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

    // deleta cliente
    cy.allure()
    .step('Deleta cliente criado')
    cy.get('@cliente').then(cliente => 
      clienteService.deletarCliente(cliente.idCliente))

  })

  it('POST - Adicionar um avaliacao na aplicação', () => {
    cy.allure()
    .epic('Testes de endpoint - Avaliacao')
    .feature('Cenários Positivos')
    .story('POST - Adicionar um avaliacao na aplicação')
    .severity('critical')

    // cria um cliente
    .step('Cria um Cliente')
    clienteService.adicionarCliente(clientePayload)
    .then(response => {
      cy.wrap(response.body).as('cliente')
      cy.get('@cliente').then(cliente => 
        meuEmailCliente = cliente.email
        )
    })

    // cria um programa
    cy.allure()
    .step('Cria um Programa')
    programaService.adicionarPrograma(programaPayload)
    .then(response => {
      cy.wrap(response.body).as('programa')
    })

    // cria uma vaga
    cy.allure()
    .step('Criar uma Vaga')
    cy.get('@programa').then(programa => {
    vagaService.adicionarVaga(programa.idPrograma, meuEmailCliente)
    .then(response => {
      cy.wrap(response.body).as('vaga')
      cy.get('@vaga').then(vaga => 
        meuIdVaga = vaga.idVaga
        )})
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
    
    // valida criar uma avaliacao
    cy.allure()
    .step('Valida Criar uma avaliacao')
    cy.get('@aluno').then(aluno => {
      avaliacaoService.adicionarAvaliacao(meuIdVaga, aluno.email)
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

    // deleta cliente
    cy.allure()
    .step('Deleta cliente criado')
    cy.get('@cliente').then(cliente => 
      clienteService.deletarCliente(cliente.idCliente))

  })

});
