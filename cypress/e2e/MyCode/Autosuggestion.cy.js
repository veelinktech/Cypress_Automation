describe("Auto Suggestion Test", () => {

  it("Select value from auto suggestion", () => {

    cy.visit("https://www.amazon.in/")

    // Type text in search box
    cy.get("#twotabsearchtextbox")
      .type("laptop")

    // Wait for suggestions
    cy.get(".s-suggestion").should("be.visible")

    // Select specific suggestion
    cy.get(".s-suggestion")
      .contains("laptop stand")
      .click()

  })

})