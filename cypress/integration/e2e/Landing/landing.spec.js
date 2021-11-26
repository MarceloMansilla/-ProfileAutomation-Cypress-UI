import { url, username, password } from '../../../../config'
import Navbar from '../../../page-objects/components/Navbar'
import LandingPageService from '../../../service/Landing/LandingPageService'
import LoginPage from '../../../page-objects/page/LoginFlow/LoginPage'


describe('Login Success Test', () => {
    before(function() {
        cy.visit(url)
        Navbar.clickOnSingin()
    })
    it('should login into application', () => {
        LoginPage.login(username, password)

    })
    it('Should see Landing page', () => {
        LandingPageService.validateHomePageInformation()
    })
})