import BasePage from '../../BasePage';
export default class LoginPage extends BasePage {

    static login(username, password) {
        cy.login(username, password)
    }
    static getForgotPasswordLink() {
        return cy.contains('Forgot your password ?')
    }
    static displayErrorMessage() {
        //cy.get('.alert-error').should('be.visible')
        cy.isVisible('.alert-error')
    }

    static validateLoginPageView() {
        cy.url().should('include', 'login.html')
        cy.contains('Log in to ZeroBank')
    }

}