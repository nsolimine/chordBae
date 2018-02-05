describe("chordBae", function () {
  it("works", function () {
    cy.visit("/");
    cy.get("h1").should("have.text", "chordBae");
    cy.get("select").should("have.length", 8);
    cy.get("@listItems").eq(0).find("a").should("have.text", "Demo");
    cy.get("@listItems").eq(1).find("a").should("have.text", "Order");
    cy.get("@listItems").eq(2).find("span").should("have.text", "Product");
    cy.get("@listItems").eq(2).find("ul > li").as("listItems2");
    cy.get("@listItems2").eq(1).should("have.text", "Documentation");
    cy.get("@listItems2").eq(2).should("have.text", "Features");
    cy.get("@listItems2").eq(3).should("have.text", "Technology");
    cy.get("body > section > ul").find("h4").should("have.length", 6);
    cy.get("a").contains("Order").click();
  });
});
