import ClienteService from '../../service/aceitacao/cliente.service';

const clienteService = new ClienteService();
const clientePayload = require('../../../fixtures/cliente.payload.json')
const cliente2Payload = require('../../../fixtures/cliente2.payload.json')

////////////////////////////////////////////////////////
/////////////////// CENÁRIOS POSITIVOS /////////////////
////////////////////////////////////////////////////////

context('Cliente - Cenários Positivos', () => {

  it('PUT - Editar cliente', () => {
    cy.allure()
    .epic('Testes de endpoint - Cliente')
    .feature('Cenários Positivos')
    .story('PUT - Editar um cliente no banco de dados')
    .severity('critical')
    .step('Cria um Cliente')
    clienteService.adicionarCliente(clientePayload)
    .then(response => {
      cy.wrap(response.body).as('cliente')
    })

    cy.allure()
    .step('Atualiza cliente criado')
    cy.get('@cliente').then(cliente => {
      clienteService.atualizarCliente(cliente.idCliente, cliente2Payload)
      .should((response) => {
        expect(response.status).to.eq(201)
      })

      cy.allure()
      .step('Deleta cliente criado')
    cy.get('@cliente').then(cliente => {
      clienteService.deletarCliente(cliente.idCliente)
      });
    }); 
  });

  it('GET - Listar todos clientes cadastrados', () => {
    cy.allure()
    .epic('Testes de endpoint - Cliente')
    .feature('Cenários Positivos')
    .story('GET - Listar todos clientes cadastrados')
    .severity('critical')
    .step('Lista clientes')
    clienteService.listarClientes("0", "10")
    .should((response) =>{
      expect(response.status).to.eq(200)
    });
  });

  it('DELETE - Remover um cliente através do id', () => {
    cy.allure()
    .epic('Testes de endpoint - Cliente')
    .feature('Cenários Positivos')
    .story('DELETE - Remover um cliente através do id')
    .severity('critical')
    .step('Cria um Cliente')
    clienteService.adicionarCliente(clientePayload)
    .then(response => {
      cy.wrap(response.body).as('cliente')
    });

    cy.allure()
    .step('Deleta cliente criado')
    cy.get('@cliente')
    .then(cliente => 
      clienteService.deletarCliente(cliente.idCliente)
      .should((response) => {
        expect(response.status).to.eq(204)
      }));
    });

  it('POST - Adicionar um cliente na aplicação', () => {
    cy.allure()
    .epic('Testes de endpoint - Cliente')
    .feature('Cenários Positivos')
    .story('POST - Adicionar um cliente na aplicação')
    .severity('critical')
    .step('Cria um cliente')
    clienteService.adicionarCliente(clientePayload)
    .should((response) => {
      expect(response.status).to.eq(201)
    }).then(response => {
      cy.wrap(response.body).as('cliente')
    })

    cy.allure()
    .step('Deleta cliente criado')
    cy.get('@cliente').then(cliente => 
      clienteService.deletarCliente(cliente.idCliente))
  })

});
