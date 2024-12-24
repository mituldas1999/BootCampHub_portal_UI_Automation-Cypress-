import HomePage from "../pages/homepage";

describe('Homepage Tests', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    homePage.visit();
    // Handle uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // Prevent test failure
    });
  });

  it('should verify the homepage content', () => {
    homePage.verifyPage();
  }); 
  it('should display the login page when Login is clicked', () => {
    homePage.getLoginButton().click();

    // Verify navigation to the login page
    cy.url().should('include', '/auth/login'); // Update with actual login page URL
    cy.contains('Welcome Back!').should('be.visible');
    cy.wait(2000); // Wait for page to load
  });
});
