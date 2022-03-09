describe("Many Users", () => {
  before("Log In", () => {
    cy.task("db:teardown");
    cy.login();
    Cypress.Cookies.defaults({ preserve: "token" });
  });

  beforeEach("Go To Main Page", () => {
    cy.visit("/dash");
  });

  it("Create Users", () => {
    var genArr = new Array(50);
    cy.wrap(genArr).each((el, index) => {
      cy.contains("Add User").should("not.exist");
      cy.get(`[aria-label="Add User"]`).click();
      cy.contains("Add User").should("be.visible");
      cy.get(":nth-child(1) > .MuiInputBase-root > .MuiInputBase-input").type(
        `test${index}@example.com`
      );
      cy.get(":nth-child(2) > .MuiInputBase-root > .MuiInputBase-input").type(
        "development"
      );
      cy.get('[type="submit"]').click();
      cy.contains(`test${index}@example.com`).should("exist");
    });
  });
  it("Cleanup", () => {
    cy.get('[aria-label="delete"]').each((el) => cy.wrap(el).click());
  });
});
