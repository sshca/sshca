describe("Adds Role", () => {
  beforeEach(function () {
    //@ts-ignore
    cy.loginByGoogleApi();
  });
  it("Opens Popup", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Create Role").should("not.exist");
    cy.get(`[aria-label="Add Role"]`).click();
    cy.contains("Create Role").should("be.visible");
    cy.get(
      ".MuiFormControl-fullWidth > .MuiInputBase-root > .MuiInputBase-input"
    ).type("Role 1");
    cy.get(
      ":nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    ).type("root");
    cy.get(
      ':nth-child(5) > [style="margin-top: 10px; width: 47.5%;"] > .MuiSelect-root'
    ).click();
    cy.get('.MuiList-root > [tabindex="-1"]').click();
    cy.get('[type="submit"]').click();
    cy.contains("Role 1").should("exist");
  });
});
