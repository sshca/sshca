describe("Authentication", () => {
  before("Reset database", () => {
    cy.task("db:teardown");
    Cypress.Keyboard.defaults({ keystrokeDelay: 0 });
  });

  it("Creates first user", () => {
    cy.visit("/");
    cy.contains("First User Signup").should("be.visible");
    cy.get("input#Email").type("test@example.com");
    cy.get("input#Password").type("development");
    cy.contains("Submit").click();
    Cypress.Cookies.preserveOnce("token");
  });

  it("Creates second user", () => {
    cy.get("#Add-User").click();
    cy.get("#Email").type("test2@example.com");
    cy.get("#Password").type("development");
    cy.get('[type="submit"]').click();
    Cypress.Cookies.preserveOnce("token");
  });

  it("Verifies roles", () => {
    cy.contains("test@example.com").click();
    cy.contains("Admin").should("be.visible");
    cy.visit("/dash");
    cy.contains("test2@example.com").click();
    cy.contains("Admin").should("not.exist");
  });

  it("Verifies normal users cannot login", () => {
    cy.visit("/");
    cy.get("input#Email").type("test2@example.com");
    cy.get("input#Password").type("development");
    cy.contains("Submit").click();
    cy.contains("Only admins may login to management interface").should(
      "be.visible"
    );
  });
});
