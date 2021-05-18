describe("View User", () => {
  beforeEach(function () {
    //@ts-ignore
    cy.loginByGoogleApi();
  });
  it("Views User", () => {
    cy.contains("test@example.com").click();
    cy.contains("test@example.com").should("exist");
    cy.contains("Role 1").should("not.exist");
    cy.get(".MuiInputBase-root").click();
    cy.contains("Role 1").click();
    cy.reload();
    cy.contains("Role 1").should("be.visible");
    cy.get(".MuiChip-root > .MuiSvgIcon-root").click();
    cy.reload();
    cy.contains("Role 1").should("not.exist");
  });
});
