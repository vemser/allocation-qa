const API_BASE = Cypress.env('API_BASE')

export let token;

before(() => {
    cy.login().should((response) => {
        expect(response.status).to.eq(200);
        token = response.body;
      });
})
Cypress.Commands.add("login", () => {
    cy.request({
      method: 'POST',
      url: `${API_BASE}/auth`,
      failOnStatusCode: false,
      body: {
        email: "teste@dbccompany.com.br",
        senha: "pqasde12@",
      },
    });
  });