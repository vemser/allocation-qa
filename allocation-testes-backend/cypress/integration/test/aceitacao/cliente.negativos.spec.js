import ClienteService from '../../service/aceitacao/cliente.service';

const clienteService = new ClienteService();
const clientePayload = require('../../../fixtures/cliente.payload.json')
const cliente2Payload = require('../../../fixtures/cliente2.payload.json')

////////////////////////////////////////////////////////
/////////////////// CENÁRIOS NEGATIVOS /////////////////
////////////////////////////////////////////////////////

context('Cliente - Cenários Negativos', () => {

  it('PUT - Tentar Editar cliente sem email', () => {
    cy.allure()
    .epic('Testes de endpoint - Cliente')
    .feature('Cenários Negativos')
    .story('PUT - Tentar Editar cliente sem email')
    .severity('normal')
    .step('Tentar Editar cliente sem email')
    
      clienteService.atualizarCliente("157", `{
        "nome": "Starlink",
        "telefone": "999123-4567",
        "situacao": "ATIVO"
      }`)
      .should((response) => {
        expect(response.status).to.eq(400)
        expect(response.body.errors[0]).to.eq("email: Email não pode ser vazio ou nulo.")
    }); 
  });

  it('PUT - Tentar Editar cliente sem nome', () => {
    cy.allure()
    .epic('Testes de endpoint - Cliente')
    .feature('Cenários Negativos')
    .story('PUT - Tentar Editar cliente sem nome')
    .severity('normal')
    .step('Tentar Editar cliente sem nome')
    
      clienteService.atualizarCliente("157", `{
        "email": "starlink123@dbccompany.com.br",
        "telefone": "999123-4567",
        "situacao": "ATIVO"
      }`)
      .should((response) => {
        expect(response.status).to.eq(400)
        expect(response.body.errors[0]).to.eq("nome: Nome não pode ser vazio ou nulo.")
    }); 
  });


  it('DELETE - Tentar Remover um cliente através do id inexistente', () => {
    cy.allure()
    .epic('Testes de endpoint - Cliente')
    .feature('Cenários Negativos')
    .story('DELETE - Tentar Remover um cliente através do id inexistente')
    .severity('normal')
    .step('Tentar Remover um cliente através do id inexistente')
      clienteService.deletarCliente("999999")
      .should((response) => {
        expect(response.status).to.eq(400)
        expect(response.body.message).to.eq("Cliente não encontrado")
      });
    });

  it('POST - Tentar Adicionar um cliente na aplicação sem nome', () => {
    cy.allure()
    .epic('Testes de endpoint - Cliente')
    .feature('Cenários Negativos')
    .story('POST - Tentar Adicionar um cliente na aplicação sem nome')
    .severity('normal')
    .step('Tentar Adicionar um cliente na aplicação sem nome')
    clienteService.adicionarCliente(`{
      "email": "starlink123@dbccompany.com.br",
      "telefone": "999123-4567",
      "situacao": "ATIVO"
    }`)
    .should((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.errors[0]).to.eq("nome: Nome não pode ser vazio ou nulo.")
    })
  })

  it('POST - Tentar Adicionar um cliente na aplicação sem email', () => {
    cy.allure()
    .epic('Testes de endpoint - Cliente')
    .feature('Cenários Negativos')
    .story('POST - Tentar Adicionar um cliente na aplicação sem email')
    .severity('normal')
    .step('Tentar Adicionar um cliente na aplicação sem email')
    clienteService.adicionarCliente(`{
      "nome": "Starlink",
      "telefone": "999123-4567",
      "situacao": "ATIVO"
    }`)
    .should((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.errors[0]).to.eq("email: Email não pode ser vazio ou nulo.")
    })
  })

});
