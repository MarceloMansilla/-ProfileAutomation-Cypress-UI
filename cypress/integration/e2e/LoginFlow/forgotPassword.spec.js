import { url, username, password } from '../../../../config'
import Navbar from '../../../page-objects/components/Navbar'
import ForgotPaswordPageService from '../../../service/LoginFlow/ForgotPaswordPageService'
import LoginPageService from '../../../service/LoginFlow/LoginPageService'


describe('Forgot Password Test', () => {
    const email = 'email@example.com'
    before(function() {
        cy.visit(url)
        Navbar.clickOnSingin()
        LoginPageService.clickOnForgotPasswordLink()
    })
    it('should add an email and click on Send Password button', () => {
        ForgotPaswordPageService.addEmail(email)
        ForgotPaswordPageService.clickOnSendPassword()

    })
    it('Should see a message connfirmation', () => {
        ForgotPaswordPageService.validateMessageForgotPassword(email)
    })
})