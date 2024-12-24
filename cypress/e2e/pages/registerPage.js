class RegisterPage {
    visit() {
        cy.visit('/auth/register');
    }

    fillFirstName(firstName) {
        cy.get('.auth_form > :nth-child(1) > .input_area > .input_with_icon > input').type(firstName);
    }

    fillLastName(lastName) {
        cy.get(':nth-child(2) > .input_area > .input_with_icon > input').type(lastName);
    }

    fillEmail(email) {
        cy.get(':nth-child(3) > .input_area > .input_with_icon > input').type(email);
    }

    fillPhone(phone) {
        cy.get('.form-control').type(phone);
    }

    fillPassword(password) {
        cy.get(':nth-child(5) > .input_field_2 > .input_area > .input_with_icon > input').type(password);
    }

    fillConfirmPassword(confirmPassword) {
        cy.get(':nth-child(6) > .input_field_2 > .input_area > .input_with_icon > input').type(confirmPassword);
    }

    clickCreateAccount() {
        cy.get('.auth_form > .submit_button').click();
    }

    register(user) {
        this.fillFirstName(user.firstName);
        this.fillLastName(user.lastName);
        this.fillEmail(user.email);
        this.fillPhone(user.phone);
        this.fillPassword(user.password);
        this.fillConfirmPassword(user.confirmPassword);
        this.clickCreateAccount();
    }
}

export default RegisterPage;
