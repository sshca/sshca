/// <reference types="cypress" />

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", () => {
  cy.visit("/");
  cy.contains("First User Signup").should("exist");
  cy.get(":nth-child(1) > .MuiInputBase-root > .MuiInputBase-input").type(
    "test@example.com"
  );
  cy.get(":nth-child(2) > .MuiInputBase-root > .MuiInputBase-input").type(
    "development"
  );
  cy.get("form > .MuiButtonBase-root").click();
  cy.url().should("include", "/dash");
  cy.contains("test@example.com").should("exist");
});

export {};
