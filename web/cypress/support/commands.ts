Cypress.Commands.add("loginByGoogleApi", () => {
  cy.request({
    method: "POST",
    url: "https://www.googleapis.com/oauth2/v4/token",
    body: {
      grant_type: "refresh_token",
      client_id: Cypress.env("googleClientId"),
      client_secret: Cypress.env("googleClientSecret"),
      refresh_token: Cypress.env("googleRefreshToken"),
    },
  }).then(({ body }) => {
    const { access_token, id_token } = body;

    const userItem = {
      token: access_token,
    };

    window.localStorage.setItem("googleCypress", JSON.stringify(userItem));
    cy.visit("/");
  });
});
