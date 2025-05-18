describe('My Third Test', () => {
  it('should visit a website and check the title', () => {
    // Visit a website
    cy.visit('https://example.com');

    // Assert the title is correct
    cy.title().should('include', 'Example Domain');
  });
});
