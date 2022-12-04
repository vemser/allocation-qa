Feature: Clientes
   

   Scenario: Validar Administrador cadastrar cliente com sucesso.
      Given que estou na página inicial
      And que estou logado como Administrador
      And clico no Menu
      And clico na opção Clientes
      And clico no botão Cadastrar Cliente
      And preencho o campo Nome cliente com um nome válido
      And preencho o campo Email cliente com um email válido
      And preencho o campo Telefone cliente com um telefone válido
      And seleciono a Situação como Ativo
      When clico em salvar
      Then devo receber uma confirmação de que o cliente foi criado com sucesso
      And busco e deleto o cliente criado para limpar o banco de dados

   Scenario: Validar Administrador tentar cadastrar cliente com dados em branco.
      Given que estou na página inicial
      And que estou logado como Administrador
      And clico no Menu
      And clico na opção Clientes
      And clico no botão Cadastrar Cliente
      When clico em salvar
      Then deve exibir uma mensagem pedindo para digitar o nome, telefone e email


