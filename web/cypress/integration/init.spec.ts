describe("Cypress", () => {
  beforeEach(function () {
    //@ts-ignore
    cy.loginByGoogleApi();
  });

  it("Opens the app", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Hosts:").should("be.visible");
    cy.contains("Roles:").should("be.visible");
    cy.contains("Users:").should("be.visible");
  });
  it("Adds Host", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Create Host").should("not.exist");
    cy.get(`[aria-label="Add Host"]`).click();
    cy.contains("Create Host").should("be.visible");
  });
  it("Adds Role", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Create Role").should("not.exist");
    cy.get(`[aria-label="Add Role"]`).click();
    cy.contains("Create Role").should("be.visible");
  });
  it("Adds User", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Add User").should("not.exist");
    cy.get(`[aria-label="Add User"]`).click();
    cy.contains("Add User").should("be.visible");
  });
});
