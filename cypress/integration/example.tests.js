describe('My First Test', () => {
  it('No search results', () => {
    cy.visit('http://automationpractice.com/index.php')
    //fill the search and press enter 
    cy.get('#search_query_top')
    .type("123")
    .type('{enter}') 
    //verify that no results found 
    cy.get('.alert').contains( 'No results were found for your search "123"')
  })
})