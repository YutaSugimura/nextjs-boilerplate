/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Top Page e2e Testing', () => {
  it('should h1 content to the index page', () => {
    cy.visit('http://localhost:3000');

    cy.get('h1').contains('Welcome to Next.js!');
  });

  it('should h3 in the box to the index page', () => {
    cy.visit('http://localhost:3000');

    cy.get(`a[href*="https://nextjs.org/docs"]`).get('h3').contains('Documentation →');
    cy.get('a[href*="https://nextjs.org/learn"]').get('h3').contains('Learn →');
    cy.get('a[href*="https://github.com/vercel/next.js/tree/master/examples"]')
      .get('h3')
      .contains('Examples →');
    cy.get(
      'a[href*="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"]',
    )
      .get('h3')
      .contains('Deploy →');
  });
});
