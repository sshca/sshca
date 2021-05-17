describe("View Host", () => {
  beforeEach(function () {
    //@ts-ignore
    cy.loginByGoogleApi();
  });
  it("Views Host", () => {
    cy.get(":nth-child(1) > .MuiList-root > .MuiButtonBase-root").click();
    cy.get(".bash", { timeout: 50000 }).should("exist");
    cy.contains("Host 1").should("exist");
    cy.contains("host1.local").should("exist");
  });
});
