describe("Normal Interaction", () => {
  it("Creates First Account", () => {
    cy.visit("/");
    cy.contains("Login").should("not.exist");
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
  it("Logs In Normally", () => {
    cy.visit("/");
    cy.contains("Login").should("exist");
    cy.contains("First User Signup").should("not.exist");
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
});
