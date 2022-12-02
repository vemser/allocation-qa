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

