import ProgramaService from '../../service/aceitacao/programa.service';
import VagaService from '../../service/aceitacao/vaga.service';
import ClienteService from '../../service/aceitacao/cliente.service';


const vagaService = new VagaService();
const clienteService = new ClienteService();

const programaService = new ProgramaService();
const programaPayload = require('../../../fixtures/programa.payload.json')
const clientePayload = require('../../../fixtures/cliente.payload.json')
let meuIdCliente;

////////////////////////////////////////////////////////
/////////////////// CENÁRIOS POSITIVOS /////////////////
////////////////////////////////////////////////////////

context('Vaga - Cenários Positivos', () => {

  it('PUT - Editar vaga por id', () => {
    cy.allure()
    .epic('Testes de endpoint - Vaga')
    .feature('Cenários Positivos')
    .story('PUT - Editar um vaga no banco de dados')
    .severity('critical')
    // cria um cliente
    .step('Cria um Cliente')
    clienteService.adicionarCliente(clientePayload)
    .then(response => {
      cy.wrap(response.body).as('cliente')
      cy.get('@cliente').then(cliente => 
        meuIdCliente = cliente.idCliente
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
    .step('Cria uma Vaga')
    cy.get('@programa').then(programa => {
    vagaService.adicionarVaga(programa.idPrograma, meuIdCliente)
    .then(response => {
      cy.wrap(response.body).as('vaga')
    })
      })

    cy.allure()
    .step('valida Edita uma Vaga')
    cy.get('@vaga').then(vaga => {
    vagaService.atualizarVaga(vaga.idVaga, vaga.idPrograma, meuIdCliente)
    .should((response) => {
      expect(response.status).to.eq(201)
    })
      })
  
        

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
    

  it('GET - Listar todos vagas cadastrados', () => {
    cy.allure()
    .epic('Testes de endpoint - Vaga')
    .feature('Cenários Positivos')
    .story('GET - Listar todos vagas cadastrados')
    .severity('critical')
    .step('Lista vagas')
    vagaService.listarVagas("0", "10")
    .should((response) =>{
      expect(response.status).to.eq(200)
    });
  });

  it('GET - Listar vagas cadastradas por idVaga', () => {
    cy.allure()
    .epic('Testes de endpoint - Vaga')
    .feature('Cenários Positivos')
    .story('GET - Listar todos vagas cadastrados')
    .severity('critical')
    .step('Lista vagas')
    // cria um cliente
    .step('Cria um Cliente')
    clienteService.adicionarCliente(clientePayload)
    .then(response => {
      cy.wrap(response.body).as('cliente')
      cy.get('@cliente').then(cliente => 
        meuIdCliente = cliente.idCliente
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
    .step('Cria uma Vaga')
    cy.get('@programa').then(programa => {
    vagaService.adicionarVaga(programa.idPrograma, meuIdCliente)
    .then(response => {
      cy.wrap(response.body).as('vaga')
    })
      })

    // valida get idVaga uma vaga
    cy.allure()
    .step('Lista vaga por idVaga')
    cy.get('@vaga').then(vaga => {
    vagaService.listarVagasPorIdVaga(vaga.idVaga)
    .should((response) =>{
      expect(response.status).to.eq(200)
    })
  })

    // deleta vaga
    cy.allure()
    .step('Valida deletar vaga criado')
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

  // listarVagasPorIdVaga

  it('DELETE - Remover um vaga através do id', () => {
    cy.allure()
    .epic('Testes de endpoint - Vaga')
    .feature('Cenários Positivos')
    .story('DELETE - Remover um vaga através do id')
    .severity('critical')
    // cria um cliente
    .step('Cria um Cliente')
    clienteService.adicionarCliente(clientePayload)
    .then(response => {
      cy.wrap(response.body).as('cliente')
      cy.get('@cliente').then(cliente => 
        meuIdCliente = cliente.idCliente
        )
    })

    // cria um programa
    cy.allure()
    .step('Cria um Programa')
    programaService.adicionarPrograma(programaPayload)
    .then(response => {
      cy.wrap(response.body).as('programa')
    })

    cy.allure()
    .step('Cria uma Vaga')
    cy.get('@programa').then(programa => {
    vagaService.adicionarVaga(programa.idPrograma, meuIdCliente)
    .then(response => {
      cy.wrap(response.body).as('vaga')
    })
      })

    // deleta vaga
    cy.allure()
    .step('Valida deletar vaga criado')
    cy.get('@vaga').then(vaga => 
      vagaService.deletarVaga(vaga.idVaga)
      .should((response) => {
        expect(response.status).to.eq(204)
      }))
    
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

  it('POST - Adicionar um vaga na aplicação', () => {
    cy.allure()
    .epic('Testes de endpoint - Vaga')
    .feature('Cenários Positivos')
    .story('POST - Adicionar um vaga na aplicação')
    .severity('critical')
    // cria um cliente
    .step('Cria um Cliente')
    clienteService.adicionarCliente(clientePayload)
    .then(response => {
      cy.wrap(response.body).as('cliente')
      cy.get('@cliente').then(cliente => 
        meuIdCliente = cliente.idCliente
        )
    })

    // cria um programa
    cy.allure()
    .step('Cria um Programa')
    programaService.adicionarPrograma(programaPayload)
    .then(response => {
      cy.wrap(response.body).as('programa')
    })

    cy.allure()
    .step('Valida Criar uma Vaga')
    cy.get('@programa').then(programa => {
    vagaService.adicionarVaga(programa.idPrograma, meuIdCliente)
    .should((response) => {
      expect(response.status).to.eq(201)
    }).then(response => {
      cy.wrap(response.body).as('vaga')
    })
      })

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
