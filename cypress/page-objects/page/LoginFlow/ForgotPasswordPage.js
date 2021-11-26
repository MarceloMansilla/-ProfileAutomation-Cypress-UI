import BasePage from '../../BasePage';
export default class ForgotPasswordPage extends BasePage {

    static getEmail() {
        return cy.get('#user_email')
    }
    static getSendPassword() {
        return cy.contains('Send Password')
    }
}