Given('I open {string} URL', (pageUrl) => {
  if (pageUrl == 'Homepage') {pageUrl='/'}
  cy.visit(pageUrl);
})
