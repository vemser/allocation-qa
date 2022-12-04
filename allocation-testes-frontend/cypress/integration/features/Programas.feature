Feature: Programas
   

   Scenario: Validar Administrador cadastrar programa com sucesso.
      Given que estou na página inicial
      And que estou logado como Administrador
      And clico no Menu
      And clico na opção Programas
      And clico no botão Cadastrar Programa
      And preencho o campo Nome do programa com um nome válido
      And preencho o campo Descrição do programa com uma descrição válida
      And preencho o campo Data de Término do programa com um telefone válido
      And seleciono a Situação do programa como Aberto
      When clico em salvar
      Then devo receber uma confirmação de que o programa foi criado com sucesso
      And busco e deleto o programa criado para limpar o banco de dados

   Scenario: Validar Administrador tentar cadastrar programa com dados em branco.
      Given que estou na página inicial
      And que estou logado como Administrador
      And clico no Menu
      And clico na opção Programas
      And clico no botão Cadastrar Programa
      When clico em salvar
      Then deve exibir uma mensagem pedindo para digitar o nome do programa e data de término


