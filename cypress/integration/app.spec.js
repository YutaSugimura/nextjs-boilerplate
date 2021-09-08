/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('e2e Test', () => {
  it('should h1 content to the home page', () => {
    cy.visit('http://localhost:3000/home');

    cy.get('h1').contains('Home');
  });
});
