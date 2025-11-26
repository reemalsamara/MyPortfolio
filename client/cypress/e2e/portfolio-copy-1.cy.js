describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
});

it('portfolio', function () {
  cy.visit('http://localhost:5173/')
  cy.get('#root a[href="/"]').click();
  cy.get('#root a.btn').click();
  cy.get('#root a.btn').click();
  cy.get('#root a[href="/"]').click();
  cy.get('#root a[href="/about"][data-discover="true"]').click();
  cy.get('#root a[href="/education"]').click();
  cy.get('#root a[href="/projects"]').click();
  cy.get('#root a[href="/services"]').click();
  cy.get('#root a[href="/contact"]').click();
  cy.get('#root [name="firstName"]').click();
  cy.get('#root [name="firstName"]').type('reem');
  cy.get('#root [name="lastName"]').click();
  cy.get('#root [name="lastName"]').type('sa');
  cy.get('#root [name="email"]').click();
  cy.get('#root [name="email"]').type('rs@example.com');
  cy.get('#root [name="phone"]').click();
  cy.get('#root [name="phone"]').type('678');
  cy.get('#root [name="message"]').click();
  cy.get('#root [name="message"]').type('hello');
  cy.get('#root button').click();

  // click Sign Up, but don't assert URL (your app stays on /)
  cy.get('#root a[href="/signup"]').click();

  cy.get('#root a[href="/signin"]').click();
  cy.get('[name="email"]').click();
  cy.get('[name="email"]').type('admin@portfolio.com');
  cy.get('[name="password"]').click();
  cy.get('[name="password"]').type('Admin123');
  cy.get('#root button.auth-button').click();
  cy.get('#root a[href="/admin/contacts"]').click();
  cy.get('#root tr:nth-child(7) button').click();
  cy.get('#root div.nav-right button').click();
});
