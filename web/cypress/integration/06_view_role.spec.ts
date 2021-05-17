describe("View Role", () => {
  beforeEach(function () {
    //@ts-ignore
    cy.loginByGoogleApi();
  });
  it("Views User", () => {
    cy.get(":nth-child(2) > .MuiList-root > .MuiButtonBase-root").click();
  });
});
