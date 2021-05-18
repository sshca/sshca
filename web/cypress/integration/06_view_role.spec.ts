describe("View Role", () => {
  beforeEach(function () {
    //@ts-ignore
    cy.loginByGoogleApi();
  });
  it("Views Role", () => {
    cy.contains("Role 1").click();
    cy.contains("Role 1").should("exist");
    cy.contains("test@example.com").should("not.exist");
    cy.get(".MuiInputBase-root").click();
    cy.contains("test@example.com").click();
    cy.reload();
    cy.contains("test@example.com").should("be.visible");
    cy.get(".MuiChip-root > .MuiSvgIcon-root").click();
    cy.reload();
    cy.contains("test@example.com").should("not.exist");
  });
});
