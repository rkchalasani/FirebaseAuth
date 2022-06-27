describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#input-email').type('test@test.com')
cy.get('#input-pass').type('test123')
    cy.get('#loginbutton').click()
    cy.get('#useremail').contains('test@test.com')
    cy.get('#logoutbutton').click()
  })
})