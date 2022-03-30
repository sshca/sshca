describe("Many Hosts", () => {
  before("Log In", () => {
    cy.task("db:teardown");
    cy.login();
    Cypress.Cookies.defaults({ preserve: "token" });
    Cypress.Keyboard.defaults({ keystrokeDelay: 0 });
  });

  beforeEach("Go To Main Page", () => {
    cy.visit("/dash");
  });

  it("Create Hosts", () => {
    var genArr = new Array(5);
    cy.wrap(genArr).each((el, index) => {
      cy.get("#Add-Host").click();

      cy.get("#Name").type(`Host ${index}`);
      cy.get("#Hostname").type(`host${index}.local`);
      cy.contains("Add").click();

      cy.contains(`Host ${index}`).should("exist");
    });
  });
  it("Cleanup", () => {
    cy.get('[aria-label="delete"]').each((el) => cy.wrap(el).click());
  });
});
