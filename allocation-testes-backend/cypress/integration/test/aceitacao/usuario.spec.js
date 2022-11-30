import UsuarioService from '../../service/aceitacao/usuario.service';

const usuarioService = new UsuarioService();
const usuarioPayload = require('../../../fixtures/usuario.payload.json')
const usuario2Payload = require('../../../fixtures/usuario2.payload.json')

////////////////////////////////////////////////////////
/////////////////// CENÁRIOS POSITIVOS /////////////////
////////////////////////////////////////////////////////

context('Usuario - Cenários Positivos', () => {

  it('PUT - Editar usuario', () => {
    cy.allure()
    .epic('Testes de endpoint - Usuario')
    .feature('Cenários Positivos')
    .story('PUT - Editar um usuario no banco de dados')
    .severity('critical')
    .step('Cria um Usuario')
    usuarioService.adicionarUsuario(usuarioPayload)
    .then(response => {
      cy.wrap(response.body).as('usuario')
    })

    cy.allure()
    .step('Atualiza usuario criado')
    cy.get('@usuario').then(usuario => {
      usuarioService.atualizarUsuario("ADMINISTRADOR", usuario.idUsuario, usuario2Payload)
      .should((response) => {
        expect(response.status).to.eq(201)
      })

      cy.allure()
      .step('Deleta usuario criado')
    cy.get('@usuario').then(usuario => {
      usuarioService.deletarUsuario(usuario.idUsuario)
      });
    }); 
  });

  it('DELETE - Remover um usuario através do id', () => {
    cy.allure()
    .epic('Testes de endpoint - Usuario')
    .feature('Cenários Positivos')
    .story('DELETE - Remover um usuario através do id')
    .severity('critical')
    .step('Cria um Usuario')
    usuarioService.adicionarUsuario(usuarioPayload)
    .then(response => {
      cy.wrap(response.body).as('usuario')
    });

    cy.allure()
    .step('Deleta usuario criado')
    cy.get('@usuario')
    .then(usuario => 
      usuarioService.deletarUsuario(usuario.idUsuario)
      .should((response) => {
        expect(response.status).to.eq(204)
      }));
    });

  it('GET - Listar todos usuarios cadastrados', () => {
    cy.allure()
    .epic('Testes de endpoint - Usuario')
    .feature('Cenários Positivos')
    .story('GET - Listar todos usuarios cadastrados')
    .severity('critical')
    .step('Lista usuarios')
    usuarioService.listarUsuarios("0", "10")
    .should((response) =>{
      expect(response.status).to.eq(200)
    });
  });

  

  it('POST - Adicionar um usuario na aplicação', () => {
    cy.allure()
    .epic('Testes de endpoint - Usuario')
    .feature('Cenários Positivos')
    .story('POST - Adicionar um usuario na aplicação')
    .severity('critical')
    .step('Cria um usuario')
    usuarioService.adicionarUsuario(usuarioPayload)
    .should((response) => {
      expect(response.status).to.eq(201)
    }).then(response => {
      cy.wrap(response.body).as('usuario')
    })

    cy.allure()
    .step('Deleta usuario criado')
    cy.get('@usuario').then(usuario => 
      usuarioService.deletarUsuario(usuario.idUsuario))
  })

});
