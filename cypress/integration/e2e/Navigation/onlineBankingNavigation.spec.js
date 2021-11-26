import OnlineBankingPageService from '../../../service/Home/OnlineBankingPageService'
import LoginPageService from '../../../service/LoginFlow/LoginPageService'
import Navbar from '../../../page-objects/components/Navbar'
import { url } from '../../../../config'

describe('Online Banking Test', () => {

    before(function() {
        cy.visit(url)
        Navbar.clickOnOnlineBanking()
    })
    it('should click on Account Summary and see Login page', () => {
        OnlineBankingPageService.clickOnAccountSummary()
        LoginPageService.validateLoginPageView()
        cy.go('back')
    })
    it('should click on Pay Bills and see Login page', () => {
        OnlineBankingPageService.clickOnPayBills()
        LoginPageService.validateLoginPageView()
        cy.go('back')
    })
    it('should click on Account Activity and see Login page', () => {
        OnlineBankingPageService.clickOnAccountActivity()
        LoginPageService.validateLoginPageView()
        cy.go('back')
    })
    it('should click on My Mone Map and see Login page', () => {
        OnlineBankingPageService.clickOnMyMoneyMap()
        LoginPageService.validateLoginPageView()
        cy.go('back')
    })
    it('should click on Transfer Funds and see Login page', () => {
        OnlineBankingPageService.clickOnTransferFunds()
        LoginPageService.validateLoginPageView()
        cy.go('back')
    })
    it('should click on Online Statements and see Login page', () => {
        OnlineBankingPageService.clickOnOnlineStatements()
        cy.url().should('include', 'login.html')
        cy.go('back')
    })
})