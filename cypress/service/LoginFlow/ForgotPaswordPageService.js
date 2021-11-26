import ForgotPasswordPage from '../../page-objects/page/LoginFlow/ForgotPasswordPage'

export default class ForgotPaswordPageService {
    static validateForgotPasswordInformation() {
        cy.fixture('./LoginFlow/forgotPassword').then(data => {
            cy.contains(data.title)
            cy.contains(data.description)
            cy.contains(data.field_email)
        })
    }

    static addEmail(email) {
        ForgotPasswordPage.getEmail().type(email)
    }
    static clickOnSendPassword() {
        ForgotPasswordPage.getSendPassword().click()
    }
    static validateMessageForgotPassword(email) {
        cy.fixture('./LoginFlow/forgotPassword').then(data => {
            cy.contains(data.message + ' ' + email)
        })

    }
}