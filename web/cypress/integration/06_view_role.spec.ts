describe("View Role", () => {
  beforeEach(function () {
    //@ts-ignore
    cy.loginByGoogleApi();
  });
  it("Views User", () => {
    cy.get(":nth-child(2) > .MuiList-root > .MuiButtonBase-root").click();
    cy.contains("Role 1").should("be.visible");
    cy.contains("test@example.com").should("be.visible");
  });
});
