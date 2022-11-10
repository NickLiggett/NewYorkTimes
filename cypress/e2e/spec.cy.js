describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should be able to see the header title", () => {
    cy.get(".header-title").should(
      "contain",
      "The New York Times Article Redirect Service"
    );
  });

  it("Should be able to see articles on the home page", () => {
    cy.get(".article-list")
      .should("exist")
  });

  it("Should be able to see the filter-by-section dropdown", () => {
    cy.get(".filter-section").should("exist");
  });
});

describe("Details Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should be able to see the details page", () => {
    cy.get(".article-card")
      .first()
      .click()
      .get(".article-details")
      .should("exist");
  });

  it("Should be able to see the article's title on the details page", () => {
    cy.get(".article-card")
      .first()
      .click()
      .get(".details-title")
      .should("exist");
  });

  it("Should be able to see the article's byline on the details page", () => {
    cy.get(".article-card").first().click().get(".byline").should("exist");
  });

  it("Should be able to see the article's picture on the details page", () => {
    cy.get(".article-card").first().click().get("img").should("exist");
  });
});
