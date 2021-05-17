describe("Adds User", () => {
  beforeEach(function () {
    //@ts-ignore
    cy.loginByGoogleApi();
  });
  it("Opens Popup", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Add User").should("not.exist");
    cy.get(`[aria-label="Add User"]`).click();
    cy.contains("Add User").should("be.visible");

    cy.get(".MuiInputBase-input").type("test@example.com");
    cy.get('[type="submit"]').click();
    cy.contains("test@example.com").should("exist");
  });
});
