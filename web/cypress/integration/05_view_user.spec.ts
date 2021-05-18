describe("View User", () => {
  beforeEach(function () {
    //@ts-ignore
    cy.loginByGoogleApi();
  });
  it("Views User", () => {
    cy.get(":nth-child(3) > .MuiList-root > :nth-child(2)").click();
    cy.contains("test@example.com").should("exist");
    cy.contains("Role 1").should("not.exist");
    cy.get(".MuiSelect-root").click();
    cy.contains("Role 1").click();
    cy.reload();
    cy.contains("Role 1").should("be.visible");
  });
});
