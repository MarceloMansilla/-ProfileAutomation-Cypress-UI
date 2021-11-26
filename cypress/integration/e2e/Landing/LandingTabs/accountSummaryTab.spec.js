import { url, username, password } from '../../../../../config'
import Navbar from '../../../../page-objects/components/Navbar'
import LoginPageService from '../../../../service/LoginFlow/LoginPageService'
import LandingPageService from '../../../../service/Landing/LandingPageService'


describe('Login Success Test', () => {
    before(function() {
        cy.visit(url)
        Navbar.clickOnSingin()
    })
    it('should login into application', () => {
        LoginPageService.doLogin(username, password)
    })
    it('Should see Landing page', () => {
        LandingPageService.validateHomePageInformation()
    })
})