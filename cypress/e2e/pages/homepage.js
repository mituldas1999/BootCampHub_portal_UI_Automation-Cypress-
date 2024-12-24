class HomePage {
    visit() {
      cy.visit('/'); 
    }
  
    verifyPage() {
      cy.contains('BootcampsHub is AI-Powered, Automated Solutions For Schools and Students. Learn to grow and Earn!').should('be.visible');
    }
    getLoginButton() {
      return cy.get('button:contains("Login")');
    }
  }
  
  export default HomePage;
