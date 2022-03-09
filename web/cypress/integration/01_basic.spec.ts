describe("Normal Interaction", () => {
  before("Log In", () => {
    cy.task("db:teardown");
    cy.login();
    Cypress.Cookies.defaults({ preserve: "token" });
  });

  beforeEach("Go To Main Page", () => {
    cy.visit("/dash");
  });

  it("Add Host", () => {
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

  it("Add User", () => {
    cy.contains("Add User").should("not.exist");
    cy.get(`[aria-label="Add User"]`).click();
    cy.contains("Add User").should("be.visible");

    cy.get(":nth-child(1) > .MuiInputBase-root > .MuiInputBase-input").type(
      "test2@example.com"
    );
    cy.get(":nth-child(2) > .MuiInputBase-root > .MuiInputBase-input").type(
      "development"
    );
    cy.get('[type="submit"]').click();
    cy.contains("test2@example.com").should("exist");
  });

  it("Add Role", () => {
    cy.contains("Create Role").should("not.exist");
    cy.get(`[aria-label="Add Role"]`).click();
    cy.contains("Create Role").should("be.visible");
    cy.get(
      ".MuiDialogContent-root > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input"
    ).type("Role 1");
    cy.get(
      ":nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    ).type("root");
    cy.get(
      ":nth-child(5) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root"
    ).click();
    cy.get('.MuiAutocomplete-listbox > [tabindex="-1"]').click();
    cy.contains("Add").click();
    cy.contains("Role 1").should("exist");
  });

  it("View Host", () => {
    cy.contains("Host 1").click();
    cy.contains("AuthorizedPrincipalsFile").should("exist");
    cy.contains("Host 1").should("exist");
    cy.contains("host1.local").should("exist");
  });

  it("View User", () => {
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

  it("View Role", () => {
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
  it("Cleanup", () => {
    cy.contains("Host 1").should("be.visible");
    cy.contains("Role 1").should("be.visible");
    cy.contains("test@example.com").should("be.visible");
    cy.get('[aria-label="delete"]').each((el) => cy.wrap(el).click());
  });
});
