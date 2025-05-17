describe('My First Test', () => {
  it('Visits the Cypress Example Page', () => {
    cy.visit('https://example.cypress.io')  // Visit a demo page
    cy.contains('type').click()             // Click on the 'type' link

    // Check if the URL changed
    cy.url().should('include', '/commands/actions')

    // Type into an email field
    cy.get('.action-email')
      .type('test@example.com')
      .should('have.value', 'test@example.com')
  })
})


describe('Dropdown Click Test', () => {
  it('Clicks on "Actions" in the dropdown and checks the URL', () => {
    cy.visit('https://example.cypress.io')      // Visit the page
    cy.contains('Commands').click()             // Click on the "Commands" link to open the dropdown
    cy.contains('Actions').click()              // Click on the "Actions" link inside the dropdown
    cy.url().should('include', '/commands/actions')  // Verify the URL includes '/commands/actions'
  })
})

describe('Button Check Visibility', () => {
  it('Click the button and check the Visibility', () => {
    cy.visit('https://example.cypress.io')  // Visit the page
    cy.contains('find')      // Find the button with the text 'find'
      .should('be.visible')                // Ensure the button is visible
    
  })
})

