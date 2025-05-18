describe('Simple Test: Visit a Page and Check Title', () => {
  it('should visit example.com and check title', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should('include', 'Cypress')
  })
})
