describe("Many Roles", () => {
  before("Log In", () => {
    cy.task("db:teardown");
    cy.login();
    Cypress.Cookies.defaults({ preserve: "token" });
    Cypress.Keyboard.defaults({ keystrokeDelay: 0 });
  });

  beforeEach("Go To Main Page", () => {
    cy.visit("/dash");
  });

  it("Add Host", () => {
    cy.get("#Add-Host").click();

    cy.get("#Name").type("Host 1");
    cy.get("#Hostname").type("host1.local");
    cy.get('[type="submit"]').click();

    cy.contains("Host 1").should("exist");
  });

  it("Create Roles", () => {
    var genArr = new Array(50);
    cy.wrap(genArr).each((el, index) => {
      cy.get("#Add-Role").click();

      cy.get("#Name").type(`Role ${index}`);
      cy.get("#Add-Subrole").type("root");
      cy.get("#Host-1").click();
      cy.get('.MuiAutocomplete-listbox > [tabindex="-1"]').click();
      cy.get('[type="submit"]').click();

      cy.contains(`Role ${index}`).should("exist");
    });
  });

  it("Cleanup", () => {
    cy.get('[aria-label="delete"]').each((el) => cy.wrap(el).click());
  });
});
