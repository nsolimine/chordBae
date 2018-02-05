describe("chordBae", function () {
  it("works", function () {
    cy.visit("/");
    cy.get("h1").should("have.text", "chordBae");
    cy.get("option").should("have.length", 16);
    cy.get("#chordsDiv").should("have.length", 1);
    cy.get("header > div > p").contains("Pick a key, either Major or Minor");
  });
});
