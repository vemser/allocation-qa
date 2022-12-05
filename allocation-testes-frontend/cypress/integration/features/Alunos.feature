Feature: Alunos
   
   Scenario: Validar cadastrar aluno com sucesso.
      Given que estou na página inicial
      And que estou logado como Administrador
      And clico no Menu
      And clico na opção Alunos
      And clico no botão Cadastrar Aluno
      And preencho o campo Nome do aluno com um nome válido
      And preencho o campo Telefone do aluno com um telefone válido
      And preencho o campo Cidade do aluno com uma cidade válida
      And preencho o campo Estado do aluno com um estado válido
      And preencho o campo Email do aluno com um email válido
      And preencho o campo idPrograma do aluno com um idPrograma válido
      And preencho o campo descrição do aluno com uma descrição válida
      When clico no botão salvar aluno
      Then devo receber uma confirmação que o aluno foi criado
      And devo buscar o aluno criado e deletar para limpar o banco





