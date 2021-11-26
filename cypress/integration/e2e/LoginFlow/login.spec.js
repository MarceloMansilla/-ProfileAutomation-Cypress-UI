import { url, username, password } from '../../../../config'
import Navbar from '../../../page-objects/components/Navbar'
import LoginPageService from '../../../service/LoginFlow/LoginPageService'
import ForgotPaswordPageService from '../../../service/LoginFlow/ForgotPaswordPageService'


describe('Login Failed Test', () => {

    before(function() {
        cy.visit(url)
        Navbar.clickOnSingin()
    })
    it('should try to login with invalid credentials', () => {
        LoginPageService.doLogin('invalid username', 'invalid passowrd')
    })

    it('should display error message', () => {
        LoginPageService.displayErrorMessage()
    })
})

describe('Login Success Test', () => {
    before(function() {
        cy.visit(url)
        Navbar.clickOnSingin()
    })
    it('should login into application', () => {
        LoginPageService.doLogin(username, password)
    })
    it('Should logout from application', () => {
        Navbar.clickOnLogout()
        Navbar.displaySignInButton()
    })
})


describe('Forgot Password Test', () => {
    before(function() {
        cy.visit(url)
        Navbar.clickOnSingin()
    })
    it('should click on Forgot your password', () => {
        LoginPageService.clickOnForgotPasswordLink()
    })
    it('Should see Forgotten Password view', () => {
        ForgotPaswordPageService.validateForgotPasswordInformation()
    })
})