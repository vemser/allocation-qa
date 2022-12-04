import ProgramaService from '../../service/aceitacao/programa.service';
import AlunoService from '../../service/aceitacao/aluno.service';
import ClienteService from '../../service/aceitacao/cliente.service';
import VagaService from '../../service/aceitacao/vaga.service';


const alunoService = new AlunoService();
const vagaService = new VagaService();
const clienteService = new ClienteService();
const programaService = new ProgramaService();
const programaPayload = require('../../../fixtures/programa.payload.json')
const clientePayload = require('../../../fixtures/cliente.payload.json')

let meuEmailCliente;
let meuIdCliente;

////////////////////////////////////////////////////////
/////////////////// CENÁRIOS POSITIVOS /////////////////
////////////////////////////////////////////////////////

context('Aluno - Cenários Positivos', () => {

  it('PUT - Editar aluno por id', () => {
    cy.allure()
    .epic('Testes de endpoint - Aluno')
    .feature('Cenários Positivos')
    .story('PUT - Editar um aluno no banco de dados')
    .severity('critical')
    // cria um cliente
    .step('Cria um Cliente')
    clienteService.adicionarCliente(clientePayload)
    .then(response => {
      cy.wrap(response.body).as('cliente')
      cy.get('@cliente').then(cliente =>{ 
        meuEmailCliente = cliente.email;
        meuIdCliente = cliente.idCliente;
        })
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
    vagaService.adicionarVaga(programa.idPrograma, meuIdCliente)
    .then(response => {
      cy.wrap(response.body).as('vaga')
    })
      })

    // valida cria um aluno
    cy.allure()
    .step('Valida Criar um Aluno')
    cy.get('@programa').then(programa => {
    alunoService.adicionarAluno(programa.idPrograma)
    .should((response) => {
      expect(response.status).to.eq(201)
    })
    .then(response => {
      cy.wrap(response.body).as('aluno')
    })
      })

    // valida editar um aluno
    cy.allure()
    .step('Valida Criar um Aluno')
    cy.get('@aluno').then(aluno => {
    alunoService.atualizarAluno(aluno.idAluno, aluno.idPrograma)
    .should((response) => {
      expect(response.status).to.eq(201)
    })
      })

    // deleta aluno
    cy.allure()
    .step('Deleta aluno criado')
    cy.get('@aluno')
    .then(aluno => 
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

  it('GET - Listar todos alunos cadastrados', () => {
    cy.allure()
    .epic('Testes de endpoint - Aluno')
    .feature('Cenários Positivos')
    .story('GET - Listar todos alunos cadastrados')
    .severity('critical')
    .step('Lista alunos')
    alunoService.listarAlunos("0", "10")
    .should((response) =>{
      expect(response.status).to.eq(200)
    });
  });

  it('DELETE - Remover um aluno através do id', () => {
    cy.allure()
    .epic('Testes de endpoint - Aluno')
    .feature('Cenários Positivos')
    .story('DELETE - Remover um aluno através do id')
    .severity('critical')
    // cria um cliente
    .step('Cria um Cliente')
    clienteService.adicionarCliente(clientePayload)
    .then(response => {
      cy.wrap(response.body).as('cliente')
      cy.get('@cliente').then(cliente =>{ 
        meuEmailCliente = cliente.email;
        meuIdCliente = cliente.idCliente;
        })
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
    vagaService.adicionarVaga(programa.idPrograma, meuIdCliente)
    .then(response => {
      cy.wrap(response.body).as('vaga')
    })
      })

    // valida cria um aluno
    cy.allure()
    .step('Valida Criar um Aluno')
    cy.get('@programa').then(programa => {
    alunoService.adicionarAluno(programa.idPrograma)
    .then(response => {
      cy.wrap(response.body).as('aluno')
    })
      })

    // deleta aluno
    cy.allure()
    .step('Deleta aluno criado')
    cy.get('@aluno')
    .then(aluno => 
      alunoService.deletarAluno(aluno.idAluno)
      .should((response) => {
        expect(response.status).to.eq(204)
      }))
      
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

  it('POST - Adicionar um aluno na aplicação', () => {
    cy.allure()
    .epic('Testes de endpoint - Aluno')
    .feature('Cenários Positivos')
    .story('POST - Adicionar um aluno na aplicação')
    .severity('critical')
    // cria um cliente
    .step('Cria um Cliente')
    clienteService.adicionarCliente(clientePayload)
    .then(response => {
      cy.wrap(response.body).as('cliente')
      cy.get('@cliente').then(cliente =>{ 
        meuEmailCliente = cliente.email;
        meuIdCliente = cliente.idCliente;
        })
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
    vagaService.adicionarVaga(programa.idPrograma, meuIdCliente)
    .then(response => {
      cy.wrap(response.body).as('vaga')
    })
      })

    // valida cria um aluno
    cy.allure()
    .step('Valida Criar um Aluno')
    cy.get('@programa').then(programa => {
    alunoService.adicionarAluno(programa.idPrograma)
    .should((response) => {
      expect(response.status).to.eq(201)
    })
    .then(response => {
      cy.wrap(response.body).as('aluno')
    })
      })

    // deleta aluno
    cy.allure()
    .step('Deleta aluno criado')
    cy.get('@aluno')
    .then(aluno => 
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
