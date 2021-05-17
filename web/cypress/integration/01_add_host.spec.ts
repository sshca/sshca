describe("Add Host", () => {
  beforeEach(function () {
    //@ts-ignore
    cy.loginByGoogleApi();
  });
  it("Opens Popup", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Create Host").should("not.exist");
    cy.get(`[aria-label="Add Host"]`).click();
    cy.contains("Create Host").should("be.visible");
    cy.get(":nth-child(1) > .MuiInputBase-root > .MuiInputBase-input").type(
      "Host 1"
    );
    cy.get(
      '[style="margin-top: 10px;"] > .MuiInputBase-root > .MuiInputBase-input'
    ).type("host1.local");
    cy.contains("Add").click();
    cy.contains("Host 1").should("exist");
  });
});
