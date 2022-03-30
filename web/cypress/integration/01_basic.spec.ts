describe("Normal Interaction", () => {
  before("Log In", () => {
    cy.task("db:teardown");
    cy.login();
    Cypress.Cookies.defaults({ preserve: "token" });
    Cypress.Keyboard.defaults({ keystrokeDelay: 0 });
  });

  beforeEach("Go To Main Page", () => {
    cy.visit("/dash");
  });

  it("Add Host", () => {
    cy.get("#Add-Host").click();

    cy.get("#Name").type("Host 1");
    cy.get("#Hostname").type("host1.local");
    cy.get('[type="submit"]').click();

    cy.contains("Host 1").should("exist");
  });

  it("Add User", () => {
    cy.get("#Add-User").click();

    cy.get("#Email").type("test2@example.com");
    cy.get("#Password").type("development");
    cy.get('[type="submit"]').click();

    cy.contains("test2@example.com").should("exist");
  });

  it("Add Role", () => {
    cy.get("#Add-Role").click();

    cy.get("#Name").type("Role 1");
    cy.get("#Add-Subrole").type("root");
    cy.get("#Host-1").click();
    cy.get('.MuiAutocomplete-listbox > [tabindex="-1"]').click();
    cy.get('[type="submit"]').click();

    cy.contains("Role 1").should("exist");
  });

  it("View Host", () => {
    cy.contains("Host 1").click();
    cy.contains("ssh-rsa").should("exist");
    cy.contains("Host 1").should("exist");
    cy.contains("host1.local").should("exist");
  });

  it("View User", () => {
    cy.contains("test2@example.com").click();
    cy.contains("test2@example.com").should("exist");
    cy.contains("Role 1").should("not.exist");
    cy.get("#Roles").click();
    cy.contains("Role 1").click();
    cy.reload();
    cy.contains("Role 1").should("be.visible");
    cy.get("#Roles").type("{backspace}");
    cy.reload();
    cy.contains("Role 1").should("not.exist");
  });

  it("View Role", () => {
    cy.contains("Role 1").click();
    cy.contains("Role 1").should("exist");
    cy.contains("test2@example.com").should("not.exist");
    cy.get("#Users").click();
    cy.contains("test2@example.com").click();
    cy.reload();
    cy.contains("test2@example.com").should("be.visible");
    cy.get("#Users").type("{backspace}");
    cy.reload();
    cy.contains("test2@example.com").should("not.exist");
  });
  it("Cleanup", () => {
    cy.contains("Host 1").should("be.visible");
    cy.contains("Role 1").should("be.visible");
    cy.contains("test2@example.com").should("be.visible");
    cy.get('[aria-label="delete"]').each((el) => cy.wrap(el).click());
  });
});
