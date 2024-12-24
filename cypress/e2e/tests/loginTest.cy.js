import signInPage from '../pages/signInPage';

describe('Sign In Page Tests', () => {
    const signIn = new signInPage();

    beforeEach(() => {
        signIn.visit();
    });

    it('should load the sign-in page correctly', () => {
        cy.url().should('include', '/auth/login');
        signIn.email.should('be.visible');
        signIn.password.should('be.visible');
        signIn.signInButton.should('be.visible');
    });
    it('User Login Successfully!', () => {
        signIn.email.type('mitul.das@ts4u.us');
        signIn.password.type('Mituldas@24');
        signIn.signInButton.click();
        cy.wait(5000);
        signIn.selectCompany.click();
        cy.wait(2000);
        signIn.selectCompany_or_university.click();
        cy.wait(10000);
        //signIn.switchBootCamps.click();
        signIn.verifyLiginSuccessFully.should('be.visible');
        signIn.verifyDashboardDescription.should('be.visible');
    });

});
