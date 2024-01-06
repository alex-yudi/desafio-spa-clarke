describe('Interaction successfully with calculator', () => {
  it('successfully loads and send a valid value', () => {
    cy.visit('/')

    cy.get('input').type('10{enter}')
    cy.url().should('include', '/list-of-agents')
  })
})

describe('Interaction unsuccessfully with calculator', () => {
  it('successfully loads and send a invalid value', () => {
    cy.visit('/')

    cy.get('input').type('0{enter}')
    cy.get('span').contains('Forneça um valor válido')
  })
})