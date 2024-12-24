class signInPage {
    visit() {
        cy.visit('/auth/login'); 
    }
    get email() {
        return cy.get('input[name="email"]');
    }

    get password() {
        return cy.get('input[name="password"]');
    }

    get signInButton() {
        return cy.get('.auth_form > .submit_button');
    }
    get selectCompany(){
        return cy.get('.ant-btn');
    }
    get selectCompany_or_university(){
        return cy.get('li > .ant-btn');
    };

    get switchBootCamps(){
        return cy.get(':nth-child(1) > .switch_button_solid');
    }
    get verifyLiginSuccessFully(){
        // Verify the main heading
        return cy.contains('Bootcamps').should('be.visible');
    };
    get verifyDashboardDescription() {
        return cy.contains('Insightful Overview of Your Progress and Activities').should('be.visible');
      }
}

export default signInPage;
