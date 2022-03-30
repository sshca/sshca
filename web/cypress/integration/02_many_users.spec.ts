describe("Many Users", () => {
  before("Log In", () => {
    cy.task("db:teardown");
    cy.login();
    Cypress.Cookies.defaults({ preserve: "token" });
    Cypress.Keyboard.defaults({ keystrokeDelay: 0 });
  });

  beforeEach("Go To Main Page", () => {
    cy.visit("/dash");
  });

  it("Create Users", () => {
    var genArr = new Array(5);
    cy.wrap(genArr).each((el, index) => {
      cy.get("#Add-User").click();

      cy.get("#Email").type(`test${index}@example.com`, { delay: 0 });
      cy.get("#Password").type("development");
      cy.get('[type="submit"]').click();

      cy.contains(`test${index}@example.com`).should("exist");
    });
  });
  it("Cleanup", () => {
    cy.get('[aria-label="delete"]').each((el) => cy.wrap(el).click());
  });
});
