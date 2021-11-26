import HomePageService from '../../../service/Home/HomePageService'
import LoginPageService from '../../../service/LoginFlow/LoginPageService'
import Navbar from '../../../page-objects/components/Navbar'
import { url } from '../../../../config'

describe('Home Test', () => {

    before(function() {
        cy.visit(url)
        Navbar.clickOnHome()
    })
    it('should click on Checking Account Activity and see Login page', () => {
        HomePageService.clickOnCheckingAccountActivity()
        LoginPageService.validateLoginPageView()
        cy.go('back')
    })
    it('should click on Transfer Funds and see Login page', () => {
        HomePageService.clickOnTransferFunds()
        LoginPageService.validateLoginPageView()
        cy.go('back')
    })
    it('should click on My Money Map and see Login page', () => {
        HomePageService.clickOnMyMoneyMap()
        LoginPageService.validateLoginPageView()
        cy.go('back')
    })
})