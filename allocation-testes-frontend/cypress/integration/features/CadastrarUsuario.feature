Feature: Cadastrar Usuario
   
   Scenario: Validar redirecionamento para página de cadastrar usuario com sucesso.
      Given que estou na página inicial
      When clico no link "Crie uma conta"
      Then devo validar redirecionamento para página de cadastro de usuário

   Scenario: Validar cadastrar usuario com sucesso.
      Given que estou na página inicial
      And clico no link "Crie uma conta"
      And preencho o campo "Nome completo" com um nome válido
      And preencho o campo "Email" com um email válido
      And preencho o campo "Senha" com uma senha válida
      And preencho o campo "Confirme a senha" com a mesma senha do campo anterior
      When clico em salvar
      Then devo receber uma confirmação de que o usuário foi criado com sucesso

   Scenario: Validar Administrador cadastrar usuario do tipo Administrador com sucesso.
      Given que estou na página inicial
      And que estou logado como Administrador
      And clico no Menu
      And clico na opção Usuários
      And clico no botão Cadastrar Usuário
      And preencho o campo Nome completo com um nome válido
      And preencho o campo Email com um email válido
      And preencho o campo Senha com uma senha válida
      And preencho o campo Confirme a senha com a mesma senha do campo anterior
      And seleciono o Tipo de Usuario Administrador
      When clico em salvar
      Then devo receber uma confirmação de que o usuário adm foi criado com sucesso
      And busco e deleto o usuario criado para limpar o banco de dados