Feature: Login
   
   Scenario: Validar fazer login com sucesso.
      Given que estou na página inicial
      And preencho o campo de login de Email com um email válido
      And preencho o campo de login de Senha com uma senha válida
      When clico no botão Login
      Then devo validar redirecionamento para página principal

  
   Scenario: Validar tentar fazer login com senha inválida.
      Given que estou na página inicial
      And preencho o campo de login de Email com um email válido
      And preencho o campo de login de Senha com uma senha inválida
      When clico no botão Login
      Then devo receber uma mensagem de Usuário ou senha inválidos

   Scenario: Validar tentar fazer login com email e senha em branco.
      Given que estou na página inicial
      When clico no botão Login
      Then deve exibir uma mensagem pedindo para digitar o email e a senha



