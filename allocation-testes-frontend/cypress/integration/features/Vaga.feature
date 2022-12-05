Feature: Vaga
   
   Scenario: Validar Administrador cadastrar vaga com sucesso.
      Given que estou na página inicial
      And que estou logado como Administrador
      And clico no botão Criar Vaga
      And preencho o campo Nome da vaga com um nome válido
      And preencho o campo idCliente de um cliente válido
      And preencho o campo idPrograma de um programa válido
      And preencho o campo Número de Vagas com o número válido
      And preencho o campo Data de Abertura com uma data válida
      And preencho o campo Data de Fechamento com uma data válida
      And seleciono a situação da vaga como Aberto
      When clico no botão salvar Vaga
      Then devo receber uma confirmação de que a vaga foi criada

   Scenario: Validar buscar vaga com sucesso.
      Given que estou na página inicial
      And que estou logado como Administrador
      And digito um idVaga válido no campo de pesquisa
      When clico no botão buscar
      Then valido se retornou a vaga correta



