Feature: Usuarios
      
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
      Then devo receber uma confirmação de que o novo usuário foi criado com sucesso

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
      Then devo receber uma confirmação de que o usuário foi criado com sucesso
      And busco e deleto o usuario criado para limpar o banco de dados
      
   Scenario: Validar Administrador cadastrar usuario do tipo Instrutor com sucesso.
      Given que estou na página inicial
      And que estou logado como Administrador
      And clico no Menu
      And clico na opção Usuários
      And clico no botão Cadastrar Usuário
      And preencho o campo Nome completo com um nome válido
      And preencho o campo Email com um email válido
      And preencho o campo Senha com uma senha válida
      And preencho o campo Confirme a senha com a mesma senha do campo anterior
      And seleciono o Tipo de Usuario Instrutor
      When clico em salvar
      Then devo receber uma confirmação de que o usuário foi criado com sucesso
      And busco e deleto o usuario criado para limpar o banco de dados

   Scenario: Validar Administrador cadastrar usuario do tipo Gestão de Pessoas com sucesso.
      Given que estou na página inicial
      And que estou logado como Administrador
      And clico no Menu
      And clico na opção Usuários
      And clico no botão Cadastrar Usuário
      And preencho o campo Nome completo com um nome válido
      And preencho o campo Email com um email válido
      And preencho o campo Senha com uma senha válida
      And preencho o campo Confirme a senha com a mesma senha do campo anterior
      And seleciono o Tipo de Usuario Gestão de Pessoas
      When clico em salvar
      Then devo receber uma confirmação de que o usuário foi criado com sucesso
      And busco e deleto o usuario criado para limpar o banco de dados

   Scenario: Validar Administrador cadastrar usuario do tipo Gestor com sucesso.
      Given que estou na página inicial
      And que estou logado como Administrador
      And clico no Menu
      And clico na opção Usuários
      And clico no botão Cadastrar Usuário
      And preencho o campo Nome completo com um nome válido
      And preencho o campo Email com um email válido
      And preencho o campo Senha com uma senha válida
      And preencho o campo Confirme a senha com a mesma senha do campo anterior
      And seleciono o Tipo de Usuario Gestor
      When clico em salvar
      Then devo receber uma confirmação de que o usuário foi criado com sucesso
      And busco e deleto o usuario criado para limpar o banco de dados      

   Scenario: Validar Administrador editar nome de usuario com sucesso.
      Given que estou na página inicial
      And que estou logado como Administrador
      And clico no Menu
      And clico na opção Usuários
      And busco um usuário pelo email "teste2@dbccompany.com.br"
      And clico no botão editar
      And mudo seu nome para "Teste QA B MUDADO"
      And preencho e confirmo a senha deste usuário
      When clico no botão salvar
      Then valido se houve a mudança de nome do usuário


