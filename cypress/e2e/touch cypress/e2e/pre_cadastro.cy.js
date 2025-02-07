import { faker } from '@faker-js/faker';

describe('Teste de Pré-Cadastro', () => {
    
    beforeEach( () => {
        cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');

    })
    
    
    it('Deve preencher o formulário de pré-cadastro com sucesso', () => {
      
      cy.get('#email_create').type(faker.internet.email()) // Gera um email aleatório

      cy.get('#SubmitCreate > span').click()

      cy.get('#id_gender1').click() // Seleciona um gênero

      cy.get('#customer_firstname').type(faker.person.firstName()) // Nome correto aleatório

      cy.get('#customer_lastname').type(faker.person.lastName()) // Sobrenome correto aleatório

      cy.get('#passwd').type(faker.internet.password()) // // Senha aleatória
      
      cy.get('#days').type(faker.number.int({ min: 1, max: 31 })) // Dia de nascimento
      cy.get('#months').type(faker.number.int({ min: 1, max: 12 }))// Mês de nascimento
      cy.get('#years').type(faker.number.int({ min: 1900, max: 2024 })) // Ano de nascimento

      cy.get('#submitAccount > span').click() // Clica no botão de criar conta







    });
  });
  