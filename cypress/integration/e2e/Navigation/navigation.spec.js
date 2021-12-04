import 'cypress-lighthouse';
import { url } from '../../../../config'
import Navbar from '../../../page-objects/components/Navbar'
import FeedbackPageService from '../../../service/Home/FeedbackPageService'
import HomePageService from '../../../service/Home/HomePageService'
import OnlineBankingPageService from '../../../service/Home/OnlineBankingPageService'

describe('Navigation navbar Test', () => {

    before(function() {
        cy.visit(url)
        cy.lighthouse(url)
    })

    it('should click on ONLINE BANKING and see the ONLINE BANKING information tab', () => {
        Navbar.clickOnOnlineBanking()
        cy.url().should('include', 'online-banking.html')
        OnlineBankingPageService.validateOnlineBankingPageInformation()
    })

    it('should click on HOME and see the HOME information tab', () => {
        Navbar.clickOnHome()
        cy.url().should('include', 'index.html')
        HomePageService.validateHomePageInformation()
    })

    it('should click on FEEDBACK and see the FEEDBACK information tab', () => {
        Navbar.clickOnFeedback()
        cy.url().should('include', 'feedback.html')
        FeedbackPageService.validateFeedbackPageInformation()
        Navbar.clickOnLogo()
    })
})