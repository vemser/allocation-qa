Feature: Apresentacao
   
   Scenario: Validar reservar aluno em uma vaga com sucesso.
      Given que estou na página inicial
      And que estou logado como Administrador
      And busco o código de uma vaga
      And devo receber uma confirmação do código da vaga
      And clico no painel de Alunos
      And busco pelo aluno Green Nienow
      And clico em reservar
      And preencho o campo Codigo da Avaliação com o número 87
      And preencho o campo Codigo da Vaga com o número 283
      And preencho o campo Data de Reserva com uma data Valida
      And preencho o campo Descrição com uma descrição Valida
      When clico em salvar
      Then devo receber uma confirmação de reserva do aluno
