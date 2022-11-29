import VagaService from '../../service/aceitacao/vaga.service';

const vagaService = new VagaService();

const vagaPayload = require('../../../fixtures/vaga.post.payload.json')

////////////////////////////////////////////////////////
/////////////////// CENÁRIOS POSITIVOS /////////////////
////////////////////////////////////////////////////////

context('Vaga - Cenários Positivos', () => {

  // it('PUT - Editar vaga por id', () => {
  //   cy.allure()
  //   .epic('Testes de endpoint - Vaga')
  //   .feature('Cenários Positivos')
  //   .story('PUT - Editar vaga por id')
  //   .severity('critical')
  //   .step('Adiciona pessoa')
  //   pessoaService.adicionarPessoa(userPayload)
  //   .then(response => {
  //     cy.wrap(response.body).as('pessoa')
  //   })

  //   cy.allure()
  //   .step('Atualiza pessoa criada pelo id pessoa')
  //   cy.get('@pessoa').then(pessoa => {
  //       pessoaService.atualizarPessoa(pessoa.idPessoa, userPayload)
  //     .should((response) => {
  //       expect(response.status).to.eq(200)
  //     })

  //     cy.allure()
  //     .step('Deleta pessoa criada')
  //   cy.get('@pessoa').then(pessoa => {
  //     pessoaService.deletarPessoa(pessoa.idPessoa)
  //   });
  //   });
  // });

  // it('GET - Listar todas as pessoas cadastradas', () => {
  //   cy.allure()
  //   .epic('Testes de endpoint - Pessoa')
  //   .feature('Cenários Positivos')
  //   .story('GET - Listar todas as pessoas cadastradas')
  //   .severity('critical')
  //   .step('Lista pessoas')
  //   pessoaService.listarPessoas(0, 20)
  //   .should((response) =>{
  //     expect(response.status).to.eq(200)
  //   });
  // });

  // it('DELETE - Deleta uma vaga através do id', () => {
  //   cy.allure()
  //   .epic('Testes de endpoint - Pessoa')
  //   .feature('Cenários Positivos')
  //   .story('DELETE - Deleta uma vaga através do id')
  //   .severity('critical')
  //   .step('Cria uma pessoa')
  //   pessoaService.adicionarPessoa(userPayload)
  //   .then(response => {
  //     cy.wrap(response.body).as('pessoa')
  //   });

  //   cy.allure()
  //   .step('Deleta pessoa criada')
  //   cy.get('@pessoa')
  //   .then(pessoa => 
  //     pessoaService.deletarPessoa(pessoa.idPessoa)
  //     .should((response) => {
  //       expect(response.status).to.eq(200)
  //     }));
  //   });


  // it('POST - Criar um registro de vaga', () => {
  //   cy.allure()
  //   .epic('Testes de endpoint - Vaga')
  //   .feature('Cenários Positivos')
  //   .story('POST - Criar um registro de vaga')
  //   .severity('critical')
  //   .step('Cria um cadastro de vaga no banco de dados.')
  //   vagaService.adicionarVaga("ABERTO", vagaPayload)
  //   .should((response) => {
  //     expect(response.status).to.eq(200)
  //   }).then(response => {
  //     cy.wrap(response.body).as('vaga')
  //   })

    
  //   cy.allure()
  //   .step('Deleta vaga criada')
  //   cy.get('@vaga').then(vaga => 
  //     vagaService.deletarVaga(vaga.id))
  // })

  // it('GET - Buscar Pessoa Por CPF', () => {
  //   cy.allure()
  //   .epic('Testes de endpoint - Pessoa')
  //   .feature('Cenários Positivos')
  //   .story('GET - Buscar Pessoa Por CPF')
  //   .severity('critical')
  //   .step('Cria uma pessoa')
  //   pessoaService.adicionarPessoa(userPayload)
  //   .then(response => {
  //     cy.wrap(response.body).as('pessoa')
  //   })

  //   cy.allure()
  //   .step('Busca pessoa por CPF')
  //   cy.get('@pessoa').then(pessoa => 
  //     pessoaService.buscarPessoaPorCpf(pessoa.cpf)
  //     .should(() => {
  //       expect(userPayload.cpf).to.eq(pessoa.cpf)
  //     }))

  //     cy.allure()
  //     .step('Deleta pessoa criada')
  //   cy.get('@pessoa').then(pessoa => 
  //     pessoaService.deletarPessoa(pessoa.idPessoa))
  // })

  // it('GET - Buscar Relatorio Pessoa', () => {
  //   cy.allure()
  //   .epic('Testes de endpoint - Pessoa')
  //   .feature('Cenários Positivos')
  //   .story('GET - Buscar Relatorio Pessoa')
  //   .severity('critical')
  //   .step('Cria uma pessoa')
  //   pessoaService.adicionarPessoa(userPayload)
  //   .then(response => {
  //     cy.wrap(response.body).as('pessoa')
  //   })

  //   cy.allure()
  //   .step('Busca relatório de pessoa por id pessoa')
  //   cy.get('@pessoa').then(pessoa => 
  //     pessoaService.buscarRelatorioPessoa(pessoa.idPessoa)
  //     .should(() => {
  //       expect(userPayload.email).to.eq(pessoa.email)
  //     }))

  //   cy.allure()
  //   .step('Deleta pessoa criada')
  //   cy.get('@pessoa').then(pessoa => 
  //     pessoaService.deletarPessoa(pessoa.idPessoa))
  // })

  // it('GET - Lista Completa Pessoa', () => {
  //   cy.allure()
  //   .epic('Testes de endpoint - Pessoa')
  //   .feature('Cenários Positivos')
  //   .story('GET - Lista Completa Pessoa')
  //   .severity('critical')
  //   .step('Cria uma pessoa')
  //   pessoaService.adicionarPessoa(userPayload)
  //   .then(response => {
  //     cy.wrap(response.body).as('pessoa')
  //   })

  //   cy.allure()
  //   .step('Busca lista completa da pessoa pelo id pessoa')
  //   cy.get('@pessoa').then(pessoa => 
  //     pessoaService.buscarListaCompleta(pessoa.idPessoa)
  //     .should(() => {
  //       expect(userPayload.email).to.eq(pessoa.email)
  //     }))

  //   cy.allure()
  //   .step('Deleta pessoa criada')
  //   cy.get('@pessoa').then(pessoa => 
  //     pessoaService.deletarPessoa(pessoa.idPessoa))
  // })

  // it('GET - Lista Com Endereco Pessoa', () => {
  //   cy.allure()
  //   .epic('Testes de endpoint - Pessoa')
  //   .feature('Cenários Positivos')
  //   .story('GET - Lista Com Endereco Pessoa')
  //   .severity('critical')
  //   .step('Cria uma pessoa')
  //   pessoaService.adicionarPessoa(userPayload)
  //   .then(response => {
  //     cy.wrap(response.body).as('pessoa')
  //   })

  //   cy.allure()
  //   .step('Busca lista de endereço por id pessoa')
  //   cy.get('@pessoa').then(pessoa => 
  //     pessoaService.buscarListaComEndereco(pessoa.idPessoa)
  //     .should(() => {
  //       expect(userPayload.email).to.eq(pessoa.email)
  //     }))

  //     cy.allure()
  //     .step('Deleta pessoa criada')
  //   cy.get('@pessoa').then(pessoa => 
  //     pessoaService.deletarPessoa(pessoa.idPessoa))
  // })

  // it('GET - Lista Com Contatos Pessoa', () => {
  //   cy.allure()
  //   .epic('Testes de endpoint - Pessoa')
  //   .feature('Cenários Positivos')
  //   .story('GET - Lista Com Contatos Pessoa')
  //   .severity('critical')
  //   .step('Cria uma pessoa')
  //   pessoaService.adicionarPessoa(userPayload)
  //   .then(response => {
  //     cy.wrap(response.body).as('pessoa')
  //   })

  //   cy.allure()
  //   .step('Busca lista com contatos por id pessoa')
  //   cy.get('@pessoa').then(pessoa => 
  //     pessoaService.buscarListaComContatos(pessoa.idPessoa)
  //     .should(() => {
  //       expect(userPayload.email).to.eq(pessoa.email)
  //     }))

  //   cy.allure()
  //   .step('Deleta pessoa criada')
  //   cy.get('@pessoa').then(pessoa => 
  //     pessoaService.deletarPessoa(pessoa.idPessoa))
  // })


  // it('GET - Buscar Pessoa por Nome válido', () => {
  //   cy.allure()
  //   .epic('Testes de endpoint - Pessoa')
  //   .feature('Cenários Positivos')
  //   .story('GET - Buscar Pessoa por Nome válido')
  //   .severity('critical')
  //   .step('Cria uma pessoa')
  //   pessoaService.adicionarPessoa(userPayload)
  //   .then(response => {
  //     cy.wrap(response.body).as('pessoa')
  //   })

  //   cy.allure()
  //   .step('Busca pessoa por nome')
  //   cy.get('@pessoa').then(pessoa => 
  //     pessoaService.buscarPessoaPorNome(pessoa.nome)
  //     .should(() => {
  //       expect(userPayload.email).to.eq(pessoa.email)
  //     }))

  //     cy.allure()
  //     .step('Deleta pessoa criada')
  //   cy.get('@pessoa').then(pessoa => 
  //     pessoaService.deletarPessoa(pessoa.idPessoa))
  // })
});





