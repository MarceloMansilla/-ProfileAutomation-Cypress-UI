import LoginPage from '../../page-objects/page/LoginFlow/LoginPage';
export default class LoginPageService {

    static doLogin(username, password) {
        LoginPage.login(username, password)
    }
    static clickOnForgotPasswordLink() {
        LoginPage.getForgotPasswordLink().click()
    }
    static displayErrorMessage() {
        cy.isVisible('.alert-error')
    }

    static validateLoginPageView() {
        cy.url().should('include', 'login.html')
        cy.contains('Log in to ZeroBank')
    }

}