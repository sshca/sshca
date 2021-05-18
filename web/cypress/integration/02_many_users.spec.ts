describe("Many Users", () => {
  before("Login", () => {
    //@ts-ignore
    cy.loginByGoogleApi();
  });

  beforeEach("Retain Login", () => {
    Cypress.Cookies.preserveOnce("id", "token");
    cy.visit("/dash");
  });
  it("Create Users", () => {
    var genArr = new Array(50);
    cy.wrap(genArr).each((el, index) => {
      cy.contains("Add User").should("not.exist");
      cy.get(`[aria-label="Add User"]`).click();
      cy.contains("Add User").should("be.visible");

      cy.get(".MuiInputBase-input").type(`test${index}@example.com`);
      cy.get('[type="submit"]').click();
      cy.contains(`test${index}@example.com`).should("exist");
    });
  });
  it("Cleanup", () => {
    cy.get('[aria-label="delete"]').each((el) => cy.wrap(el).click());
  });
});
