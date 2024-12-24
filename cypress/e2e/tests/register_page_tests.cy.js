import { faker } from '@faker-js/faker';
import RegisterPage from '../pages/registerPage';

describe('Register Page Test Suite', () => {
    const registerPage = new RegisterPage();

    beforeEach(() => {
        registerPage.visit();
    });

    it('should register a new user successfully and verify email', () => {
        // Generate random user data with a valid password
        const password = `${faker.internet.password(8, false, /[A-Za-z0-9]/)}@!`; // Ensure at least one special character
        const user = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            phone: faker.phone.number('##########'), // Adjust phone number format if needed
            password: password,
            confirmPassword: password, // Ensure both password and confirmPassword match
        };

    });
});
