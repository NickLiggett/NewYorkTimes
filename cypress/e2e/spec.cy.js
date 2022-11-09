describe('Homepage', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should be able to see the header title', () => {
    cy.get('.header-title').should('contain', 'The New York Times Article Redirect Service')
  })

  it('Should be able to see articles on the home page', () => {
    cy.get('.article-list').should('exist')
    .get('.article-list').children().should('have.length', 36)
  })

  it('Should be able to see the filter-by-section dropdown', () => {
    cy.get('.filter-section').should('exist')
    .get()
  })
})